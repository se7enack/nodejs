#!/usr/local/bin/node

var crypto = require('crypto'),
	lodash = require('lodash'),
	definition, options,
	algorithm = 'aes-256-ctr';

console.log('Password Manager');

function encryptString(plainText) {
	var cipher = crypto.createCipher(algorithm, cryptoKey),
		crypted = cipher.update(plainText, 'utf8', 'hex');
	crypted += cipher.final('hex');
	return crypted;
}

function decryptString(encryptedText) {
	var decipher = crypto.createDecipher(algorithm, cryptoKey),
		dec = decipher.update(encryptedText, 'hex', 'utf8');
	dec += decipher.final('utf8');
	return dec;
}

var argv = require('yargs')
	.command('get', 'gets the results for a site', function (yargs) {
		yargs.options({
			site: {
				demand: true
			}
		})
	})
	.command('create', 'creates an entry for a site', function (yargs) {
		yargs.options({
			site: {
				demand: true,
				alias: 's',
				description: 'The website',
				type: 'string'
			},
			user: {
				demand: true,
				alias: 'u',
				description: 'The username',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'The password',
				type: 'string'
			}
		})
	})	
	.argv;

var command = argv._[0];

var storage = require('node-persist');
storage.initSync();

function createAccount (account) {
	var accounts = storage.getItemSync('accounts');

	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	accounts.forEach(function (account){
		if (account.site === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

if (command === 'get') {
	if (typeof argv.key === 'undefined') {
		cryptoKey = 'Se7enACK';
	} else {
		cryptoKey = argv.key;
	}
	if (typeof argv.site === 'undefined') {
		console.log('switch \'--site\' is missing. ');
	} else {
		accountName = argv.site;
		var results = getAccount(argv.site);
		results.password = decryptString(results.password);
		if (typeof results !== 'undefined') {
			console.log(results);
		}
	}

} else if (command === 'create') {
	if (typeof argv.key === 'undefined') {
		cryptoKey = 'Se7enACK';
	} else {
		cryptoKey = argv.key;
	}
	if (typeof argv.site === 'undefined' || typeof argv.user === 'undefined' || typeof argv.password === 'undefined') {
		console.log('The \'create\' command requires three switches (--site, --user, and --password) at least one was missing.');
	} else {
		argv.password = encryptString(argv.password);
		createAccount({
			site: argv.site,
			username: argv.user,
			password: argv.password 
		});
		accountName = argv.site;
		var results = getAccount(argv.site);
		console.log(results);
	}
} else if (typeof command === 'undefined') {
	console.log('\nExample Usage:\r');
	console.log('\n');
	console.log('	./app.js create --site hotmail --user myUsername --password password123\r');
	console.log('\n');
	console.log('	./app.js get --site hotmail\r');
	console.log('\n');
	console.log('Optionally you can change the default crypto key (much more secure):\r');
	console.log('\n');
	console.log('	./app.js create --site hotmail --user myUsername --password password123 --key yourCustomCryptoKey\r');
	console.log('\n');
	console.log('	./app.js get --site hotmail --key yourCustomCryptoKey\r');
	console.log('\n');


}
