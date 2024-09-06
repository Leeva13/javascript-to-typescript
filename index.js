const userName = 'John Doe';
let userAge = 25;
const isAdmin = false;

function greetUser(name) {
    return `Hello, ${name}!`;
}

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

function isEven(num) {
    return num % 2 === 0;
}

function displayUserInfo(name, age, admin) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Admin: ${admin ? 'Yes' : 'No'}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(arr) {
    return arr.filter(isEven);
}

const fruits = ['apple', 'banana', 'cherry', 'date', 'fig'];

function isFavoriteFruit(fruit) {
    return fruit === 'banana';
}

const favoriteFruit = fruits.find(isFavoriteFruit) || 'not found';

function listFruits(fruitList) {
    fruitList.forEach((fruit, index) => {
        console.log(`${index + 1}. ${fruit}`);
    });
}

console.log(greetUser(userName));
console.log(`User's age is: ${calculateAge(1997)}`);
displayUserInfo(userName, userAge, isAdmin);

const evenNumbers = filterEvenNumbers(numbers);
console.log('Even numbers:', evenNumbers);

listFruits(fruits);
console.log('Favorite fruit:', favoriteFruit);

let counter = 0;

function incrementCounter() {
    counter++;
}

function decrementCounter() {
    counter--;
}

incrementCounter();
incrementCounter();
decrementCounter();
console.log('Counter:', counter);

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log('Cannot divide by zero');
        return 0;
    }
    return a / b;
}

console.log('Add:', add(10, 5));
console.log('Subtract:', subtract(10, 5));
console.log('Multiply:', multiply(10, 5));
console.log('Divide:', divide(10, 0));

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log('Factorial of 5:', factorial(5));

const user = {
    name: 'Alice',
    age: 30,
    isAdmin: true
};

function getObjectKeys(obj) {
    return Object.keys(obj);
}

console.log('User object keys:', getObjectKeys(user));

function greetAll(names) {
    return names.map(name => `Hello, ${name}!`);
}

console.log('Greetings:', greetAll(['Alice', 'Bob', 'Charlie']));

function toUpperCase(str) {
    return str.toUpperCase();
}

console.log('Uppercase:', toUpperCase('hello'));

for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i + 1}`);
}

const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

items.forEach((item, index) => {
    console.log(`Processing ${item} at position ${index}`);
});

const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

randomNumbers.sort((a, b) => a - b);

console.log('Sorted numbers:', randomNumbers);

const result = randomNumbers.reduce((acc, num) => acc + num, 0);

console.log('Sum of numbers:', result);

let toggle = true;

function toggleSwitch() {
    toggle = !toggle;
    console.log('Toggle is now:', toggle);
}

toggleSwitch();
toggleSwitch();

const rectangle = {
    width: 10,
    height: 5,
    area() {
        return this.width * this.height;
    }
};

console.log('Rectangle area:', rectangle.area());

const temperatures = [20, 21, 19, 22, 18, 23, 21];

const averageTemp = temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;

console.log('Average temperature:', averageTemp);

function countdown(start) {
    for (let i = start; i > 0; i--) {
        console.log(i);
    }
    console.log('Blast off!');
}

countdown(5);

function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}

console.log('Fibonacci sequence up to 10:', fibonacci(10));

const animals = ['cat', 'dog', 'rabbit', 'elephant'];

const upperAnimals = animals.map(animal => animal.toUpperCase());

console.log('Uppercased animals:', upperAnimals);

const shapes = ['circle', 'square', 'triangle', 'rectangle'];

shapes.forEach(shape => {
    console.log(`Drawing a ${shape}`);
});

const doubleNumbers = numbers.map(num => num * 2);

console.log('Doubled numbers:', doubleNumbers);

const filteredFruits = fruits.filter(fruit => fruit.length > 5);

console.log('Fruits with more than 5 letters:', filteredFruits);

const isOdd = num => num % 2 !== 0;

const oddNumbers = numbers.filter(isOdd);

console.log('Odd numbers:', oddNumbers);