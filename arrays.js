#!/usr/local/bin/node

var grades = [78,100,98,95,88];
console.log(grades);

//add new value to the end
grades.push(50);
console.log(grades);

//remove value on end
grades.pop();
console.log(grades);

//add to first value
grades.unshift(79);
console.log(grades);

//remove first value
grades.shift(79);
console.log(grades);