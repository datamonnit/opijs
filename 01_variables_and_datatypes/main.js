// Use const if no need re-assign
const firstName = 'John';

// Assign value 
let age = 45;
age = 46; // re-assign a value
console.log(age);

// String, Number, Boolean, null, undefined
const lastName = 'Smith';
const rate = 0.4;
const isStudent = false;
const x = null;
const y = undefined;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rate);
console.log(typeof isStudent);
console.log(typeof x);
console.log(typeof y);

// Concatenation
console.log('My name is ' + firstName + ' ' + lastName + ' and I\'m ' + age + ' years old.');

// Template string
console.log(`My name is ${firstName} ${lastName} and I'm ${age} years old.`);
// or 

const hi = `My name is ${firstName} and I'm ${age}.`;
console.log(hi);