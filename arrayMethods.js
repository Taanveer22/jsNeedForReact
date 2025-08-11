const products = [
  { brand: "msi", gadget: "laptop", price: 90000, color: "black" },
  { brand: "asus", gadget: "desktop", price: 79000, color: "red" },
  { brand: "hp", gadget: "tablet", price: 53000, color: "blue" },
  { brand: "xiaomi", gadget: "phone", price: 30000, color: "silver" },
  { brand: "tplink", gadget: "router", price: 6000, color: "orange" },
];
console.log(products);

// map() method================
const brands = products.map((element) => element.brand);
console.log(brands);
const prices = products.map((item) => item.price * 2);
console.log(prices);

// forEach() method============
products.forEach((product) => console.log(product.color));
products.forEach((product) => console.log(product.gadget));

// filter() method
const cheap = products.filter((element) => element.price <= 50000);
console.log(cheap);

const specificBrand = products.filter((item) => item.brand.includes("a"));
console.log(specificBrand);

const specificGadget = products.filter((product) =>
  product.gadget.includes("l")
);
console.log(specificGadget);

// find() method
const specialBrand = products.find((item) => item.brand.includes("a"));
console.log(specialBrand);

const specialGadget = products.find((element) => element.gadget.includes("l"));
console.log(specialGadget);


