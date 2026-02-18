🚀 JavaScript Revision Before React (Complete Guide)
📌 Introduction

React শেখার আগে JavaScript fundamentals strong হওয়া জরুরি। এই README হচ্ছে একটি complete revision checklist যেখানে প্রতিটি concept এর example দেয়া আছে।

🎯 Goal

✅ JavaScript core concepts revise করা
✅ ES6 fundamentals বোঝা
✅ React এর আগে solid base তৈরি করা

📚 JavaScript Core Concepts
1️⃣ Variables
let vs const vs var
// var (old way)
var age = 20;

// let (changeable)
let score = 10;
score = 15;

// const (not changeable)
const name = "Taanveer";


👉 const default হিসেবে ব্যবহার করা ভালো।

2️⃣ Conditions
Comparison Operators
let a = 10;
let b = 20;

console.log(a > b);   // false
console.log(a < b);   // true
console.log(a === 10); // true
console.log(a !== b); // true

Logical Operators
if (a > 5 && b > 10) {
  console.log("Both true");
}

if (a > 5 || b < 10) {
  console.log("At least one true");
}

if-else Example
let marks = 85;

if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else {
  console.log("Fail");
}

3️⃣ Array
Declaration
const numbers = [1, 2, 3];

Basic Methods
numbers.push(4); // add
numbers.pop();   // remove last

console.log(numbers.length);
console.log(numbers.indexOf(2));
console.log(numbers.includes(3));

Check Array
Array.isArray(numbers); // true

slice vs splice
const arr = [1,2,3,4];

arr.slice(1,3); // [2,3]

arr.splice(1,1); // remove index 1

Extra
arr.shift();   // remove first
arr.unshift(0);// add first
arr.join("-"); // "1-2-3"

Advanced reduce
const sum = arr.reduce((acc, val) => acc + val, 0);

4️⃣ Loops
for loop
for(let i=0;i<5;i++){
 console.log(i);
}

while loop
let i = 0;
while(i<3){
 console.log(i);
 i++;
}

for of
for(const item of arr){
 console.log(item);
}

for in
const user = {name:"A", age:20};

for(const key in user){
 console.log(key);
}

5️⃣ Function
function add(a,b){
 return a+b;
}

const result = add(2,3);
console.log(result);


Without return:

function sayHello(){
 console.log("Hello");
}

6️⃣ Object
const person = {
 name:"Taanveer",
 age:22,
 skills:["JS","React"],
 address:{ city:"Dhaka" }
};

console.log(person.name);
console.log(person["age"]);

🧠 Basic Data Types
1️⃣ String
const str = "hello";

console.log(str.length);
console.log(str.includes("he"));
console.log(str.indexOf("l"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(0,2));
console.log("Hi ".concat(str));


Loop string:

for(const ch of str){
 console.log(ch);
}


👉 String immutable।

2️⃣ Number
const num = 10;
const float = 10.5;

Number("20"); // convert

Number.isInteger(num);

NaN; // Not a Number

3️⃣ Boolean
true;
false;


Truthy:

"hello", 1, [], {}


Falsy:

false, 0, "", null, undefined, NaN

4️⃣ null vs undefined
let x;
console.log(x); // undefined

let y = null;

⚡ ES6 Essentials
1️⃣ Template String
const user = {name:"Taanveer", skills:["JS","React"]};

const text = `Hello ${user.name}, skill ${user.skills[0]}`;

2️⃣ Spread Operator
const oldArr = [1,2,3];

const newArr = [...oldArr, 4];

const filtered = oldArr.filter(x=>x!==2);

3️⃣ Arrow Functions
No param
const nine = () => 9;

One param
const mul = x => x*12;

Two param
const calc = (a,b)=> (a+b)/4;

Multi-line
const complex = (a,b)=>{
 const x=a+5;
 const y=b+5;
 return x*y;
}

4️⃣ Destructuring
const user2 = {name:"A", balance:500};

const {balance} = user2;

const arr2=[10,20,30];
const [,bal] = arr2;

5️⃣ Default Parameter
function greet(name="Guest"){
 console.log(name);
}

6️⃣ Optional Chaining
user?.address?.city;

🧩 Useful Methods
Math
Math.min(1,2,3);
Math.max(1,2,3);
Math.ceil(4.2);
Math.floor(4.8);
Math.abs(-5);
Math.round(4.5);
Math.random();

Regular Expression
const regex = /hello/i;
regex.test("Hello world");

JSON
const obj = {name:"A"};

const json = JSON.stringify(obj);

JSON.parse(json);

🔥 Reality Check

👉 Direct React হবে না যদি JavaScript strong না হয়।
👉 JavaScript respect করো = React easy হবে।