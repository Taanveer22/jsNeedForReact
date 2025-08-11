// destructing via array elements
const numbers = [22, 33];
const m = numbers[0];
const n = numbers[1];
console.log(m, n);
const [x, y] = [22, 33];
console.log(x, y);

// destructuring via array identifier
const students = [888, 444];
const fisrtClass = students[0];
const secondClass = students[1];
console.log(fisrtClass, secondClass);
const [first, second] = students;
console.log(first, second);

// destructuring via function
const boxify = (a, b) => {
  const nums = [a, b];
  return nums;
};
console.log(boxify(3, 4));

console.log(boxify(8, 7));
const [n1, n2] = boxify(8, 7);
console.log(n1, n2);
