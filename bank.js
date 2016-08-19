#!/usr/local/bin/node

var account = {
	balance: 0.00,
	firstName: 'Stephen',
	lastName: 'Burke',
	number: 8026,
	active: false
}

function deposit (account,amount) {
	welcome(account);	
	console.log('Depositing '+ amount + " to current balance of "+account.balance+"...");
	account.balance=account.balance+amount;
	getBalance(account);
	return account.balance;
}

function withdraw (account,amount) {
	welcome(account);
	console.log('Withdrawing '+ amount + " from current balance of "+account.balance+"...");
	account.balance=account.balance-amount;
	getBalance(account);
	return account.balance;
}

function getBalance (account) {
	console.log('\n'+ 'Your balance is now currently: ' + account.balance+'\n');
}

function welcome (account) {
	console.log('\n\n'+'Account Number: '+account.number);
	console.log('Welcome '+ account.firstName +' '+ account.lastName+"!"+'\n');
}

function checkActive (account) {
	if (account.active === false) {
		console.log('Contact the bank: Account is not active');
		//7 will map to bad account error
		process.exit(7);
	}
	else {
		return;
	}
}

checkActive(account);
deposit(account,5001);
