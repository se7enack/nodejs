#!/usr/local/bin/node

function add (numOne,numTwo) {
	return "The sum of "+ numOne +" and "+ numTwo +" is "+ (numOne+numTwo);
}

var total = add(5,9);
console.log(total);

//or better yet, if you don't need the var:
console.log(add(3,66));