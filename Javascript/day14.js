// split a name string into a char-array, and capitalize each element
// then capitalize the first letter by overwriting char-array item zero, then reconstruct into a string
let name = "josh";

let chars = name.split("");
console.log(chars);

chars[0] = name[0].toUpperCase();
console.log(chars);

let capitalized = chars.join("");  
console.log(capitalized);

// split is a method that takes a string and splits it into an array of substrings based on a specified delimiter.
// [0] is a reference to the first element in the array.
// [1] is a reference to the second element in the array.
// [2] is a reference to the third element in the array.
// .join is a method that takes an array and joins its elements into a single string, with an optional separator.
