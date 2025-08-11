const student = {
  grade: 7,
  section: "science",
  age: 23,
};
console.log(student);
const { grade, section } = student;
console.log(grade, section);

const employee = {
  position: "developer",
  os: "mac",
  languages: ["html", "css", "js"],
  tools: {
    deploy: "netlify",
    codeShow: "github",
    distro: {
      debian: "ubuntu",
      redHat: "fedora",
      arch: "manjaro",
    },
  },
};

const { deploy, codeShow } = employee.tools;
console.log(deploy, codeShow);

const [first, second, third] = employee.languages;
console.log(first, second, third);

const { debian, redHat, arch } = employee.tools.distro;
console.log(debian, redHat, arch);
