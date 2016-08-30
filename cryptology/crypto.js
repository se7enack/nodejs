var crypto = require('crypto'),
	lodash = require('lodash'),
	definition, options,
	cryptoKey = 'Se7enACK',
	algorithm = 'aes-256-ctr';

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

if (process.argv.length !== 4) {
	console.log('Usage:');
	console.log('       node crypto.js encrypt plain_text');
	console.log('       node crypto.js decrypt encrypted_text');
	return;
}

if (process.argv[2] === 'encrypt') {
	console.log(encryptString(process.argv[3]));
	return;
}

if (process.argv[2] === 'decrypt') {
	console.log(decryptString(process.argv[3]));
	return;
}