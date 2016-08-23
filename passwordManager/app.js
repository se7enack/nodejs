#!/usr/local/bin/node

console.log('starting password manager...');

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
		if (account.name === accountName) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

/*
createAccount({
	name: 'LinkedIn',
	username: 'myEmail@myemail.com',
	password: 'n7j%tT99$ffs+1'
});
*/

var linkedIn =getAccount('LinkedIn');
console.log(linkedIn);
