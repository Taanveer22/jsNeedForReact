// javascript er 6 rotno:

// 1. how to declare a variable using let and const
const fatherName = "Arnold";
let season = "winter";
season = "summer";

// 2. six basic conditios: >, <, ===, !==, >=, <=
// multiple conditions checking: &&, ||

if (fatherName === "arnold" && season === "rainy") {
  console.log("not matched");
} else if (fatherName === "Arnold") {
  console.log("matched");
} else {
  console.log("not found");
}

// 3. array property and method understanding
// index, length property understanding
// map, push, shift, unshift, reduce, filter etc. method understanding
const arrayNumbers = [3, 4, 6, 8, 4];
console.log(arrayNumbers.length);
console.log(arrayNumbers[2]);

// 4. basic loop understandig and iterating which should be used in arrays and which in objects
// specially for loop is very important

const numbers = [2, 4, 5, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function mechanism understanding
// fat arrow functions is very important for react users
function multiply(num1, num2) {
  return (result = num1 * num2);
}
let output = multiply(33, 44);
console.log(output);

let addition = (n1, n2) => {
  return (result = n1 + n2);
};
let output2 = addition(44, 55);
console.log(output2);

//6. object mechanism understanding
// three ways to access object property name

const actor = {
  name: "sakib khan",
  age: 40,
  isFamous: true,
  movies: ["king khan", "dhakar mastan", "sikari", "priyotoma"],
};

// direct access by property
console.log(actor.name);

// access via property name string
console.log(actor["age"]);

// access via property name in a variable
const myVar = "movies";
console.log(actor[myVar]);

const popularity = "isFamous";
console.log(actor[popularity]);
