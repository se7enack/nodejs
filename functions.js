#!/usr/local/bin/node

function sayHello (firstName, lastName) {
	console.log("Hello "+firstName+ " "+ lastName+"!")
}

//return to be used as new var
function sayBye (firstName, lastName) {
	return "Bye "+firstName+ " "+ lastName+"!";
}

sayHello("Stephen", "Burke");

var byeMessage = sayBye("Stephen", "Burke");
console.log(byeMessage)