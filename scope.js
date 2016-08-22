#!/usr/local/bin/node

var age = 44;

function localFunction () {
	var name = "Stephen";
	console.log(age);
}

localFunction();

//won't work, scope yo
//console.log(name);