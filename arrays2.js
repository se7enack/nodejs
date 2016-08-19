#!/usr/local/bin/node

var grades = [50,100,75,100,50];
var sumGrade=0;

grades.forEach(function (grade) {
	sumGrade = grade + sumGrade;
	console.log(grade);
	return sumGrade;
});

function showMe (sumGrade) {
	var totalGrade=sumGrade/grades.length;
	console.log('\n'+'Final Grade is: '+(totalGrade));
}

showMe(sumGrade);


