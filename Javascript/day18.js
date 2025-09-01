
// Day 18: print out unique characters from a string using built-in array-unique function or it's equivalent

const name = prompt("Enter the 'Banana' Word");
const uniqueChars = [...new Set(name)];
console.log(uniqueChars);


// prompt("Enter a string:"); is equivalent to const name = prompt("Enter the 'Banana' Word");

// [...new Set(str1)] → Spread syntax ... ginamit para gawing array ulit yung Set.