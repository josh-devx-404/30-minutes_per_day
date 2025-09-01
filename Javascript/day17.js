// Day 17: print out unique characters from a string using built-in array-unique function or it's equivalent

const str1 = "holla";
const str2 = [...new Set(str1)];

console.log(str2);

const numbers = [1, 2, 3, 4, 5, 2];
const num1 = [...new Set(numbers)];

console.log(num1);



// [...new Set(str1)] → Spread syntax ... ginamit para gawing array ulit yung Set.
