const check1 = false;
if (check1) {
  console.log("truthy");
} else {
  console.log("falsy");
}

/**  !! === similar of truthy */
const check2 = undefined;
if (!!check2) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//* ! === opposite of truthy*/
const check3 = null;
if (!check3) {
  console.log("falsy");
} else {
  console.log("truthy");
}

let test1 = 5;
if (test1) {
  console.log("truthy");
} else {
  console.log("falsy");
}

/**  !! === similar of truthy */
let test2 = {};
if (!!test2) {
  console.log("truthy");
} else {
  console.log("falsy");
}

//* ! === opposite of truthy*/
let test3 = [];
if (!test3) {
  console.log("falsy");
} else {
  console.log("truthy");
}
