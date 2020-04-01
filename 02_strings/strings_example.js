const 
    firstName = 'John', 
    lastName = 'Smith', 
    age = 46;

// Concatenation
console.log('My name is ' + firstName + ' ' + lastName + ' and I\'m ' + age + ' years old.');

// Template string
console.log(`My name is ${firstName} ${lastName} and I'm ${age} years old.`);
// or 

const hi = `My name is ${firstName} and I'm ${age}.`;
console.log(hi);

// String methods

const myString = 'Hello all students!';

// Length
console.log(myString.length);

// Case
console.log(myString.toUpperCase);
console.log(myString.toLowerCase);

// Substring
console.log(myString.substring(0,5));
console.log(myString.substring(0,5).toUpperCase());

// Split
console.log(myString.split('')); //by letter
console.log(myString.split(' ')); // by space

const tags = 'js, html, css';
console.log(tags.split(', '));
