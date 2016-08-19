#!/usr/local/bin/node

var pet = {
	name: 'Lily',
	type: 'cat'
}

var car = {
	name: 'Unlimited',
	type: 'Jeep'
}

function printObject (x) {
	console.log("You own a "+x.type+" named "+x.name);
} 

printObject(pet);
printObject(car);