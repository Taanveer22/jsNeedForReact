// template string
const activist = {
  name: "asif adnan",
  age: 35,
  university: "dhaka university",
  isGraduated: true,
  website: "chintaporadh.com",
};

const info = `${activist.name} is one of the greatest islamic activist of Bangladesh . He studied in ${activist.university} . He is very famous for his activist website ${activist.website}`;
console.log(info);

// arrow function
const getFive = () => 5;
console.log(getFive());

const addSix = (num) => num + 6;
console.log(addSix(44));

const isEven = (n) => n % 2 === 0;
console.log(isEven(31));

const isOdd = (i) => i % 2 === 1;
console.log(isOdd(87));

const addition = (x, y, z) => x + y + z;
console.log(addition(3, 5, 7));

const multiply = (a, b, c, d, e) => a * b * c * d * e;
console.log(multiply(3, 4, 6, 8, 9));

const doMath = (m, n) => {
  const sum = m + n;
  const mult = m * n;
  const result = sum + mult;
  return result;
};
console.log(doMath(4, 7));

// spread operator
const books = ["bangla", "english", "ict"];
console.log(books);

const scienceBooks = books;
scienceBooks.push("physics", "math");
console.log(books);
console.log(scienceBooks);

//============ spread opreator doesnot change the original array========
const artsBooks = [...books];
artsBooks.push("economics", "geography");
console.log(books);
console.log(artsBooks);

const commerceBooks = [...books, "finance"];
console.log(books);
console.log(commerceBooks);
commerceBooks.push("marketing", "accounting");
console.log(books);
console.log(commerceBooks);
