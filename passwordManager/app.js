#!/usr/local/bin/node

console.log('Password Manager...');

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
				demand: true
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
	if (typeof argv.site === 'undefined') {
		console.log('switch \'--site\' is missing. ');
	} else {
		accountName = argv.site;
		var results = getAccount(argv.site);
		if (typeof results !== 'undefined') {
			console.log(results);
		}
	}

} else if (command === 'create') {
	if (typeof argv.site === 'undefined' || typeof argv.user === 'undefined' || typeof argv.password === 'undefined') {
		console.log('The \'create\' command requires three switches (--site, --user, and --password) at least one was missing.');
	} else {
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
	console.log('\nExample Usage:');
	console.log('./app.js get --site hotmail\r');
	console.log('./app.js create --site hotmail --user myusername --password password123\r\n')
}




