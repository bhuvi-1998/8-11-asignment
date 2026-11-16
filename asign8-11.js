// 1. Create an object named student with properties name, age, course, and marks. 
// Display all the property values using a loop.

let student = {
    'name' :'bhuvi',
    'age' : 28,
    'course' : 'mba',
    'marks' : '7.2 cgpa'
}

for (let key in student){
    console.log(student[key])
}

// 2. Create an object named employee with properties id, name, and salary. 
// Add a new property called department, update the salary, and display the updated object.


employee = {
    'id': 101,
    'name' : 'sanker',
    'salary' : 25000
}

console.log(employee)

employee['department'] = 'teaching'
employee['salary'] = 22000
console.log(employee)


// 3. Create an object named student with properties name, age, and address. 
// The address property should contain city, state, and pincode. Display the city and state.

let new_stu = {
    'name': 'hari',
    'age': 24,
    'address':{'city':'ongole',
        'state':'AP',
        'pincode':253306
    }
}

console.log(['address']['state'])
console.log(['address']['city'])


// 4. Create an object containing five subjects as keys and their marks as values. 
// Find the highest and lowest marks.

let subjects = {
    python: 85,
    javascript: 92,
    html: 78,
    css: 88,
    mysql: 65
};

let hi = 0;
let lo = 100;
let hi_sub = ''
let lo_sub = ''

for (key in subjects){
    if (subjects[key]>hi)
    {
        hi = subjects[key]
        hi_sub = key
    }

    if (subjects[key]<lo){
        lo = subjects[key]
        lo_sub = key
    }
}

console.log('Highest marks:',hi , hi_sub)
console.log('Lowest marks:', lo, lo_sub)

// 5. Create an object named product with properties productName, price, and quantity. 
// Calculate the total cost and check whether the price property exists.

product ={
    'productName':'plates',
    'price':329,
    'quantity':9      
}
for (key in product){
    if (key === 'price'){
    console.log('total cost is', product['price']*product['quantity'])
}}

// 6. Create an object with five employee names as keys and their salaries as values. 
// Calculate the total salary of all employees.

let employees = {
    hari: 25000,
    bhuvi: 30000,
    ravi: 28000,
    priya: 35000,
    sai: 22000
};

let total = 0;
for (key in employees){
    total += employees[key]
}
console.log(total)

// 7. Create an object named student with properties name, age, and course. 
// Extract all values using object destructuring.

let ns = {
    'name' : 'Bhuvi',
    'age' : 27,
    'course': 'python'
}

let {name, age, course } = ns;

console.log(name)
console.log(age)
console.log(course)


// 8. Create an object containing five properties. 
// Display all keys using Object.keys(), all values using Object.values(), 
// and key-value pairs using Object.entries().

let sub = {
    python: 85,
    javascript: 92,
    html: 78,
    css: 88,
    mysql: 65
};

console.log(Object.keys(sub))
console.log(Object.values(sub))
console.log(Object.entries(sub))

// 9. Create an object named calculator with two number properties and 
// a method to perform addition, subtraction, multiplication, and division.

let calculator = {
    a:20,
    b:30,

    additon : function(){
        console.log(this.a + this.b);
    },
    
    subtraction : function(){
        console.log(this.a - this.b);
    },

    multiplication : function(){
        console.log(this.a * this.b);
    },

    division : function(){
        console.log(this.a/ this.b);
    }
};

calculator.additon();
calculator.subtraction();
calculator.multiplication();
calculator.division();


// 10. Create an object named student with the following structure:
// - name
// - age
// - marks (nested object containing Python, JavaScript, and SQL marks)  
// -Complete this task and post your work on linked

let stud = {
    name : 'bhuvi',
    age : 28,
    marks:{python:85,js:75,sql:85}
}
