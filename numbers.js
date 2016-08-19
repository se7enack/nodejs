#!/usr/local/bin/node

var gradeOne = 66;
var gradeTwo = 97;
var gradeThree = 88;
var gradeFour = 1;

var finalGrade = (gradeOne+gradeTwo+gradeThree+gradeFour)/4;
finalGrade=100
if (finalGrade === 100) {
	console.log("Perfect Score of "+finalGrade+"!!!")
}
else if (finalGrade >= 70) {
	console.log("The final grade is: "+finalGrade+"!");
}
else {
	console.log("The final grade is only: "+finalGrade);
}