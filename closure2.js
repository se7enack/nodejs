#!/usr/local/bin/node

function createAddr (s) {
	function numberAdded (n) {
		n=n+s;
		return n;
	}
	return numberAdded;
}	


var ten = createAddr(10);
console.log(ten(6));

var eight = createAddr(8);
console.log(eight(20));
