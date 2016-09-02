#!/usr/local/bin/node

var accounts = [];

function createAccount (x,y,z) {
	var account = {};
	account.userName=x;
	account.balance=y;
	account.number=z;
	accounts.push(account);
	return account;
}

function getAccount (userName) {
	var matched
	accounts.forEach(function (account) {
		if (account.userName === userName) {
			matched = account;
		}
	});
	//console.log(matched);
	return matched;
}

function depositFunds (account,amount) {
	account.balance=account.balance+amount;
	return account.balance;
}

function withdrawFunds (account,amount) {
	account.balance=account.balance-amount;
	return account.balance;
}

var bburke = createAccount('Bryson',1999234.01,0);
var lburke = createAccount('Logan',2300022,1);
var mburke = createAccount('Michelle',14432.88,2);
var sburke = createAccount('Stephen',.01,3);

console.log('\n');
console.log(getAccount("Michelle"));
console.log('\n');

//console.log(accounts[1]);
//console.log(accounts);
