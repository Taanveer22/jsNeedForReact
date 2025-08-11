// loop system in array
const numbers = [33, 55, 77, 88];
for (let element of numbers) {
  console.log(element);
}

// loop system in object
const student = {
  nickName: "adnan",
  age: 25,
  varsity: "dhaka",
};
for (let item in student) {
  console.log(item);
  console.log(student[item]);
}
