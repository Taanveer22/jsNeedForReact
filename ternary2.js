let isActive = true;
const showUser = () => console.log("show user");
const hideUser = () => console.log("hide user");
isActive ? showUser() : hideUser();
// use if operator left side is true
isActive && showUser();
// use if operator left side is false
isActive = false;
isActive || showUser();
