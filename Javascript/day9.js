// Day 9: convert array to a comma separated string (array join)


let fruits = ["apple", "banana", "cherry"];
let fruitString = fruits.join(", ");
console.log(fruitString);

function fruitsToString(fruits) {
  return fruits.join(", ");
}

let myFruits = ["mango", "orange", "grape"];
console.log(fruitsToString(myFruits));

/*.join() is a method that creates and returns a new string by combining all of the elements in an array (or an array-like object), 
separated by commas or a specified separator string. */