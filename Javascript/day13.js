// Day 13: loop through a numeric array printing both the index and the value

let number = [10, 20, 30, 40, 50];


number.forEach((element, index, array) => {
    console.log(`Value: ${element}, Index: ${index},  Array: ${array}`);
});

// element → ang kasalukuyang value sa array habang ini-loop.
// index → ang kasalukuyang index ng element sa array
// array → ang buong array na ini-loop
