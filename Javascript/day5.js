// Day 5: capitalize(uppercase first letter of each word) strings using built in function

function capitalizeWords(str) {
    return str.split().map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); 
}

const name = "hello world";
console.log(capitalizeWords(name));


// return is a statement that specifies the value to be returned from a function.
// .map() is a higher-order function that creates a new array by applying a function to each element of the original array.
// => is an arrow function //