const student = {
  nickName: "adnan",
  age: 25,
  varsity: "dhaka",
};
console.log(student);

const studentJson = JSON.stringify(student);
console.log(studentJson);

const studentObj = JSON.parse(studentJson);
console.log(studentObj);
