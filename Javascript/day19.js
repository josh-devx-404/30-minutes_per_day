// output a number, and wait for a keypress, then increment the number and print it out, then repeat

let currentNumber = 0;

addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        console.log(currentNumber);
        currentNumber++;
    }
});


// addEventListener("keyup", (event) => { ... }) as a way to listen for keyup events
// keyup event is fired when the user releases a key
// event.key is used to get the value of the key that was released
// Increment operator (++) → dagdagan ng 1 yung value ng currentNumber.
// event is a parameter that contains information about the keyup event