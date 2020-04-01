const student = {
    firstName: 'John',
    lastName: 'Smith',
    age: 17,
    hobbies: ['math','literature','cuisine'],
    address: {
        street: 'Raviradantie 8-10',
        city: 'Mikkeli',
        code: '50100'
    }
}

// All data
console.log(student);

// Some data
console.log(student.firstName);
console.log(student.hobbies[1]);
console.log(student.address.city);

// Destructuring
const { firstName, lastName, address: {city}} = student;
console.log(city);

// Adding properties
student.phone = '044 123123';
console.log(student.phone);

// Array of objects
const todos = [
  { 
    id: 1,
    text: 'Do stuff',
    isComplte: true
  },
  { 
    id: 2,
    text: 'Do somtehing else',
    isComplte: false
  },
  { 
    id: 3,
    text: 'Home work',
    isComplte: true
  }
];

console.log(todos);
console.log(todos[1].text)