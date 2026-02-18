# 🚀 JavaScript Fundamentals Revision --- React Preparation Guide

> ⚡ A complete JavaScript revision roadmap designed to validate
> readiness before starting React development.

------------------------------------------------------------------------

## 📌 Overview

This repository contains a structured revision checklist covering
essential JavaScript concepts required before transitioning into React
development.

Modern React relies heavily on:

-   ES6+ syntax
-   Functional programming concepts
-   Immutable data patterns
-   Modern JavaScript behaviors

This guide ensures foundational knowledge is solid before moving
forward.

------------------------------------------------------------------------

## 🎯 Objectives

-   Strengthen JavaScript core fundamentals
-   Review ES6+ syntax and patterns
-   Practice real-world coding examples
-   Build React-ready mental models
-   Ensure junior-to-intermediate readiness

------------------------------------------------------------------------

# 🧱 Core JavaScript Concepts

## 1️⃣ Variables & Scope

``` js
var oldWay = "function scoped";

let mutableValue = 10;
mutableValue = 20;

const immutableValue = "cannot reassign";
```

Key Notes:

-   Prefer `const` by default
-   Use `let` when reassignment needed
-   Avoid `var` in modern development

------------------------------------------------------------------------

## 2️⃣ Conditional Logic

``` js
function getGrade(score) {
  if (score >= 80) return "A+";
  else if (score >= 70) return "A";
  else return "Fail";
}
```

Logical Operators:

``` js
if (age > 18 && isLoggedIn) {}
if (role === "admin" || role === "moderator") {}
```

------------------------------------------------------------------------

## 3️⃣ Arrays & Data Manipulation

``` js
const numbers = [1, 2, 3];

numbers.push(4);
numbers.pop();

numbers.includes(2);
numbers.indexOf(3);

const copy = [...numbers];

const filtered = numbers.filter(n => n !== 2);

const total = numbers.reduce((acc, val) => acc + val, 0);
```

------------------------------------------------------------------------

## 4️⃣ Looping Strategies

``` js
for (let i = 0; i < 5; i++) {}

for (const item of numbers) {}

for (const key in object) {}
```

Senior tip:

Prefer functional methods (`map`, `filter`, `reduce`) over traditional
loops when possible.

------------------------------------------------------------------------

## 5️⃣ Functions & Execution Flow

``` js
function sum(a, b) {
  return a + b;
}

const result = sum(2, 3);
```

Concepts:

-   Parameters vs Arguments
-   Return values
-   Pure functions

------------------------------------------------------------------------

## 6️⃣ Objects & Data Structures

``` js
const user = {
  name: "Taanveer",
  skills: ["JS", "React"],
  address: { city: "Dhaka" }
};

user.name;
user["skills"];
```

------------------------------------------------------------------------

# 🧠 Fundamental Data Types

## String

``` js
const text = "hello";

text.length;
text.includes("he");
text.toUpperCase();
text.substring(0, 2);
```

👉 Strings are immutable.

------------------------------------------------------------------------

## Number

``` js
Number("20");
Number.isInteger(10);
```

Understanding:

-   NaN behavior
-   Integer vs Float

------------------------------------------------------------------------

## Boolean & Truthiness

Truthy:

"hello", 1, \[\], {}

Falsy:

false, 0, "", null, undefined, NaN

------------------------------------------------------------------------

## null vs undefined

``` js
let a; // undefined
let b = null;
```

------------------------------------------------------------------------

# ⚡ ES6+ Essentials

## Template Literals

``` js
const message = `Hello ${user.name}`;
```

## Spread Operator

``` js
const newArray = [...oldArray, 4];
```

## Arrow Functions

``` js
const nine = () => 9;

const multiply = x => x * 12;

const calculate = (a, b) => (a + b) / 4;

const complex = (a, b) => {
  const x = a + 5;
  const y = b + 5;
  return x * y;
};
```

## Destructuring

``` js
const { name } = user;
const [, balance] = [100, 500];
```

## Default Parameters

``` js
function greet(name = "Guest") {}
```

## Optional Chaining

``` js
user?.address?.city;
```

------------------------------------------------------------------------

# 🧩 Standard Built-in Methods

## Math API

``` js
Math.min();
Math.max();
Math.ceil();
Math.floor();
Math.abs();
Math.round();
Math.random();
```

## Regular Expressions

``` js
/hello/i.test("Hello world");
```

## JSON

``` js
const json = JSON.stringify(obj);
JSON.parse(json);
```

------------------------------------------------------------------------

# 🧠 Senior-Level Notes

-   Prefer immutable operations
-   Avoid mutation when possible
-   Write small reusable functions
-   Use modern syntax (ES6+)
-   Think in data transformation patterns

------------------------------------------------------------------------

# 🔥 Reality Check

React is JavaScript --- not separate from it.

Without strong JavaScript fundamentals:

-   Hooks will feel confusing
-   State management becomes difficult
-   Debugging becomes hard

------------------------------------------------------------------------

# ✅ Next Step

If you fully understand everything in this guide:

👉 You are ready to begin React development.