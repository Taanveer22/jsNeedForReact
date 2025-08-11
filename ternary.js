const money = 300;
const pathaoFair = 50;

if (money >= 200) {
  console.log("biryani");
} else {
  console.log("cha biscuit");
}

let food = money >= 200 ? console.log("tehari") : console.log("lacchi");

let hotelFood = money >= 250 && pathaoFair >= 30 ? "burger" : "cofee";
console.log(hotelFood);

let cafeFood = money >= 400 || pathaoFair >= 40 ? "chinese" : "fast";
console.log(cafeFood);
