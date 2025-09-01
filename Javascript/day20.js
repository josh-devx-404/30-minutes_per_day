
let n1 = 0, n2 = 1, nextTerm;

addEventListener("keyup", (event) => {
    if (event.key === "Shift") {
        for (let i = 1; i <= 1; i++) {
            console.log(n1);
            nextTerm = n    1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
    }
});

// n1 = 0 → unang number ng Fibonacci sequence.
// n2 = 1 → pangalawang number ng Fibonacci.
// nextTerm → dito isstore yung susunod na value.
// nextTerm = n1 + n2; Formula: next = previous + current