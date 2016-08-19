#!/usr/local/bin/node

var person1 = {};
person1.firstName='Michelle';
person1.lastName='Burke';
person1.age=41;
person1.adult=true;

//or better yet:
var person2 = {
	firstName: 'Stephen',
	lastName: 'Burke',
	age: 44,
	adult: true
};

function sayHello (name) {
	console.log("Hello "+name);
}

function sayBye (name) {
	console.log("Bye "+name.firstName);
}

sayHello(person2.firstName);

sayBye(person1);

console.log(person1, person2);	