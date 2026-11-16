let numbers = [10, 25, 30, 45, 50, 65, 70, 85, 90];

let students = [
{ name: "Ravi", marks: 85 },
{ name: "Kiran", marks: 45 },
{ name: "Suresh", marks: 92 },
{ name: "Priya", marks: 35 },
{ name: "Anu", marks: 76 },
{ name: "Rahul", marks: 60 }
];

// *Questions*

// 1. Find the sum of all elements in the numbers array using reduce().

console.log(numbers.reduce((a,b) =>{
    return a+b;
},0))

// 2. Extract all students who scored more than 60 marks using filter().

let gm = students.filter((stu) => {return stu.marks > 60;})
console.log(gm)

// 3. Sort the numbers array in descending order using sort().

console.log(numbers.sort((a,b) => b-a ));

// 4. Check whether every number in the array is divisible by 5 using every().

let div = numbers.every((element)=>{
    return element%5 === 0;
});

// 5. Create a new array containing the square of every number using map().

let sl = numbers.map((nums) => {
    return nums**2;
});
console.log(sl)

// 6. Find the first student who scored more than 80 marks using find().

let fs = students.find((element) => {
    return element.marks > 80;
});

console.log(fs)

// 7. Print each number along with its index using forEach().

let fe = numbers.forEach((num) => {
    console.log(num,numbers.indexOf(num));
});

console.log(fe)

// 8. Find the index of the first number greater than 60 using findIndex().

let fi = numbers.findIndex((num) => {
    return num > 60 ;
});
console.log(fi)

// 9. Check whether at least one student scored below 35 using some().

let s = students.some((ele) => {
    return ele.marks < 35;
});
console.log(s)

// 10. Find the highest number in the numbers array using reduce().

let num = numbers.reduce((a,b) => {
    return a>b ? a:b;
});

console.log(num)

// 11. Create a new array containing only the names of all students using map().

let sn = students.map((ele) => {
    return ele.name
})

console.log(sn)

// 12. Extract all even numbers from the numbers array using filter().

let nl = numbers.filter((num) => {
    return num%2 === 0;
});
console.log(nl)

// 13. Find the student who scored the highest marks using reduce().

let hm = students.reduce((a,b) => {return a.marks >b.marks ? a:b})
console.log(hm)

// 14. Print the square of each number using forEach().

let numbers_squre = numbers.forEach((num)=>{return  num*num} )
console.log(numbers_squre)

// 15. Sort the students based on their marks in ascending order using sort().


let ssm = students.sort((a,b) => a.marks - b.marks)
console.log(ssm)

