#!/usr/local/bin/node

function countDownWhile (startPoint,endPoint) {
	while (startPoint >= endPoint) {
		console.log(startPoint);
		startPoint--;
	}
}

function countUpFor (startPoint,endPoint) {
	for (;startPoint<=endPoint;startPoint++) {
		console.log(startPoint);
	}
}

countUpFor(1,64);
countDownWhile(64,1);
