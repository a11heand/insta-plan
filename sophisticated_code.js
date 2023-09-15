/* sophisticated_code.js */

// This code demonstrates a complex data structure and a set of algorithms for analyzing and manipulating it.

// Define a class for representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log("Hello, my name is " + this.name);
  }
  
  celebrateBirthday() {
    this.age++;
    console.log("Happy birthday to me! Now I am " + this.age + " years old.");
  }
}

// Create an array of Person objects
let people = [
  new Person("Alice", 25),
  new Person("Bob", 30),
  new Person("Charlie", 35),
  new Person("David", 40)
];

// Perform some operations on the array

console.log("- Original array -");

people.forEach(person => {
  person.sayHello();
});

console.log("\n- After birthday celebration -");

people.forEach(person => {
  person.celebrateBirthday();
});

// Define a function to filter people based on age
function filterPeopleByAge(people, minAge, maxAge) {
  return people.filter(person => person.age >= minAge && person.age <= maxAge);
}

// Use the filter function

console.log("\n- People between 30 and 40 years old -");

let filteredPeople = filterPeopleByAge(people, 30, 40);

filteredPeople.forEach(person => {
  person.sayHello();
});

// Define a function to calculate the average age of people
function calculateAverageAge(people) {
  let totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
}

// Use the calculate function

console.log("\n- Average age of people -");

let averageAge = calculateAverageAge(people);

console.log("Average age:", averageAge);

// Define a function to sort people by name
function sortPeopleByName(people) {
  return people.sort((person1, person2) => person1.name.localeCompare(person2.name));
}

// Use the sort function

console.log("\n- People sorted by name -");

let sortedPeople = sortPeopleByName(people);

sortedPeople.forEach(person => {
  person.sayHello();
});

// That's all folks!