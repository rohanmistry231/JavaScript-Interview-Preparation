// %% [1. Introduction to Functions]
// Learn JavaScript functions for reusable code.

function runFunctionsDemo() {
    // %% [2. Function Declarations and Expressions]
    function add(a, b) { return a + b; }
    const multiply = function (a, b) { return a * b; };
    console.log(`Add: ${add(2, 3)}, Multiply: ${multiply(2, 3)}`);

    // %% [3. Arrow Functions and Defaults]
    const subtract = (a, b = 1) => a - b;
    console.log(`Subtract: ${subtract(5)}`);

    // %% [4. Rest and Spread]
    function sumAll(...numbers) { return numbers.reduce((sum, n) => sum + n, 0); }
    const nums = [1, 2, 3];
    console.log(`Sum All: ${sumAll(...nums)}`);

    // %% [5. Closures]
    function counter() {
        let count = 0;
        return () => ++count;
    }
    const increment = counter();
    console.log(`Closure Count: ${increment()}, ${increment()}`);

    // %% [6. Practical Application]
    // Process synthetic data with IIFE
    const processed = (function (data) {
        return data.map(x => x * 2);
    })([1, 2, 3]);
    console.log(`IIFE Processed: ${processed}`);

    // %% [7. Interview Scenario: Functions]
    /*
    Interview Scenario: Functions
    Q: What is a closure and how is it used?
    A: A closure is a function that retains access to its outer scope's variables.
    Key: Closures are useful for data privacy and stateful functions.
    Example: function counter() { let count = 0; return () => ++count; }
    */
}

// Execute the demo
runFunctionsDemo();