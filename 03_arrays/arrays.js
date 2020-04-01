// Arrays are variables that hold multiple values

const cars = new Array('Volvo','BMW','Ford');
console.log(cars);

const fruits =  ['apples','oranges','pears'];
console.log(fruits);

// Check if variable is array
console.log(Array.isArray(fruits));

// Getting individual elements
console.log(fruits[1]);
console.log(fruits[0]);

// Adding elements
fruits[3] = 'watermelon';
console.log(fruits);

fruits.push('mangos');
console.log(fruits);

fruits.unshift('strawberrys');
console.log(fruits);

// Remove last element
fruits.pop();
console.log(fruits);

// Find index of an element
console.log(fruits.indexOf('pears'));


