// Day 12: loop through a numeric array preferrably not using manual index increment

let number = [10, 20, 30, 40, 50];
number.forEach(element => {
    console.log(element);
});

// let → ginagamit para mag-declare ng variable (puwede magbago ang value later).
// number → pangalan ng variable (ikaw pumili).
// [10, 20, 30, 40, 50] → isang array, ibig sabihin ito ay parang “list” ng values


/*
- .forEach() → built-in function ng arrays sa JavaScript.
- Ang trabaho niya: i-loop (ulit-ulitin) lahat ng laman ng array.
- Automatic na dumadaan sa bawat element (hindi mo na kailangan gumawa ng counter i++). */


// => → ito ang arrow function syntax (short form ng function sa JavaScript).
// Parang nagsasabi: “For each element, gawin mo itong code sa loob.”