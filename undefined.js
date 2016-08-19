#!/usr/local/bin/node


function greetUser (name) {
	if (typeof name === 'undefined') {
		console.log("it's like undefined man");
	}
	else {
		console.log('Hello '+name);
	}
}

greetUser("Stephen");

greetUser();