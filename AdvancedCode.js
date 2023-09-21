// Filename: AdvancedCode.js
// Description: This code demonstrates various advanced concepts and techniques in JavaScript

// Constant definition
const PI = 3.14159;

// Class definition
class Shape {
  constructor(color) {
    this.color = color;
  }

  getArea() {
    throw new Error('Abstract method not implemented');
  }
}

// Class inheritance
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return PI * Math.pow(this.radius, 2);
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Function definition
function calculateTotalArea(shapes) {
  let totalArea = 0;
  for (let i = 0; i < shapes.length; i++) {
    totalArea += shapes[i].getArea();
  }
  return totalArea;
}

// Promises and async/await
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve({ id: 1, name: 'John Doe' });
      } else {
        reject('User not found');
      }
    }, 2000);
  });
}

async function getUserDetails(userId) {
  try {
    const user = await fetchUserData(userId);
    console.log(`Name: ${user.name}`);
  } catch (error) {
    console.error(error);
  }
}

// Event handling with listeners
document.getElementById('btnSubmit').addEventListener('click', () => {
  const userInput = document.getElementById('inputText').value;
  alert(`You entered: ${userInput}`);
});

// Modules and named exports
export function reverseString(str) {
  return str.split('').reverse().join('');
}

export function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Importing modules
import { capitalizeString } from './AdvancedCode.js';

console.log(capitalizeString('hello')); 

// ...
// Code continues with various other advanced concepts and techniques
// ...

// Execution:
console.log(calculateTotalArea([new Circle('red', 5), new Rectangle('blue', 10, 10)]));
getUserDetails(1);