#!/usr/local/bin/node

var accounts = [];

function createAccount (x,y,z) {
	var account = {};
	account.userName=x;
	account.balance=y;
	account.number=z;
	accounts.push(account)
	console.log(account)
}

function getAccount (userName) {
	accounts.forEach(function (account) {
		if (account.userName === userName) {
			console.log(account);
		}
	}); 
}

createAccount('Bryson',1999234.01,0);
createAccount('Logan',2300022,1);
createAccount('Michelle',14432.88,2);
createAccount('Stephen',.01,3);
console.log('\n')
getAccount("Michelle");

//console.log(accounts[1])
//console.log(accounts)