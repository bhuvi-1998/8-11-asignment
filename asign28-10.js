// 1. Write a JavaScript program to accept two values from the user, 
// convert them into numbers, and print their sum, difference, product, and quotient.

let a = prompt('enter a number');
let b = prompt('enter a number');
let c = Number(a)
let d = Number(b)

console.log(c+d)
console.log(c-d)
console.log(c*d)
console.log(c/d)


// 2. Write a program to accept a value from the user and 
// display its data type before and after converting it into a number.

let e = prompt('enter a number');

console.log(typeof e)
let f = Number(e)
console.log(typeof f)


// 3. Write a program to accept a number and check whether it is positive, negative, or zero.

let g = Number(prompt('enter a number'));

if (g<0){
    console.log('negative')
}
else if(g>0){
    console.log('positive')
}
else{
    console.log('zero')
}


// 4. Write a program to accept a student's marks and display the grade based on the marks obtained.

let marks = Number(prompt('enter marks of student'));
if (marks>=90){
    console.log('garde is a+')
}
else if (marks >= 80){
    console.log('your grade is a')
}
else if(marks>=70){
    console.log('grade is b+')
}
else if(marks>=60){
    console.log('grade is b')
}
else if(marks>=50){
    console.log('grade is c+')
}
else if(marks>=40){
    console.log('grade is c')
}
else if(marks>=35){
    console.log('grade is d')
}
else{
    console.log('fail')
}

// 5. Write a program to accept three numbers from the user and find the largest number.

let h = Number(prompt('enter a number'));
let i = Number(prompt('enter b number'));
let j = Number(prompt('enter c number'));
if (h>=i && h>=j){
    console.log('a is largest number')
}
else if(i>=h && i>=j){console.log("b is largest number")}
else{
    console.log('c is largest number')
}


// 6. Write a program to accept a person's age and check whether they are eligible to vote.

let age = Number(prompt('enter age'));
if (age>=18){
    console.log('you are eligible for vote')
}
else {
    console.log('you are not eligible for vote')
}


// 7. Write a JavaScript program to check whether a given year is a leap year.

let year = Number(prompt('enter a year'))
if (year%400 === 0 || year%4 ===0 && year%100 !==0){
console.log(year ,'is a leap year')
}
else{
    console.log('not a leap year')
}

// 8. Write a program to accept a number and check whether it is divisible by both 5 and 11.

let k = Number(prompt('enter a number'));
if (k%5 ===0 && k%11 ===0){
console.log(k ,'is divisible by both 5 and 11')
}
else{
console.log(k ,'is not divisible by both 5 and 11')
}

// 9. Write a simple calculator program that accepts two numbers and 
// an operator from the user and performs the corresponding arithmetic operation.

let l = Number(prompt('enter a number'));
let m = Number(prompt('enter a number'));
let n = prompt('enter a operator (+,-,*,/)')
if (n==='+'){
    console.log(l+m)
}
else if (n==='-'){
    console.log(l-m)
}
else if (n==='*'){
    console.log(l*m)
}

else if (n==='/'){
    console.log(l/m)
}
else {
    console.log('not an operator')
}