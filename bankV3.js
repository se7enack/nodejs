#!/usr/local/bin/node

var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return account
}

function getAccount (userName) {
	var matchedAccount;
	accounts.forEach(function (account) {
		if (accounts.userName=userName) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

function depositFunds (account,amount) {
	account.balance=account.balance+amount;
}

function withdrawFunds (account,amount) {
	account.balance=account.balance-amount;
}

function getBalance (account) {
	return account.balance;
}

//Start

var burkeSte = createAccount({
	userName: 'Stephen',
	balance: 0
});

depositFunds(burkeSte, 6969);
console.log(getBalance(burkeSte));


withdrawFunds(burkeSte, 4369);
console.log(getBalance(burkeSte));

console.log('\n');
console.log(getAccount('Stephen'));


