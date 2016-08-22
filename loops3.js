#!/usr/local/bin/node

function countUp (s,e) {
	while (s<=e) {
		console.log(s);
		s++
	}
}

function countDown (s,e) {
	for (;s>=e;s--) {
		console.log(s);
	}
}

countUp(1,10);
countDown(10,1);