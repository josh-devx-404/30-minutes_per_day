// Ask for a number input, print an error when it's not a number using if else

let number = parseInt(prompt("Enter a number: "));

 if (isNaN(number)) {
     console.log("That's not a number!");
 } else {
     console.log("You entered the number: " + number);
 }