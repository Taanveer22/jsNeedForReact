const loadData = () => {
  fetch(`https://dummyjson.com/users`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

console.log(loadData());

const loadJson = async () => {
  const res = await fetch(`https://dummyjson.com/posts`);
  const data = await res.json();
  console.log(data);
};

console.log(loadJson);
