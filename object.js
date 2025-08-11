const student = {
  nickName: "adnan",
  age: 35,
  varsity: "dhaka university",
  7: "books",
  "web-site": "chintaporadh.com",
};
// acessing object data
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

// access object via dot notation
console.log(student.nickName);
console.log(student.age);

// access object via bracket notation
console.log(student[7]);
console.log(student["web-site"]);

// acess object via variable
const study = "varsity";
const result = student[study];
console.log(result);

// acess object via variable
const surName = "nickName";
const output = student[surName];
console.log(output);
