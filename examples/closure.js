#!/usr/local/bin/node

function helloYou (name) {
	function hi () {
		console.log('Hi '+name+'!');
	}
	return hi;
}

var yoSteve = helloYou('Stephen');

yoSteve()