// %% [1. Introduction to Functional Programming]
// Learn JavaScript functional programming for predictable code.

function runFunctionalProgrammingDemo() {
    // %% [2. Pure Functions]
    const add = (a, b) => a + b;
    console.log(`Pure Function: ${add(2, 3)}`);

    // %% [3. Higher-Order Functions]
    const withLogging = fn => (...args) => {
        console.log(`Calling function with args: ${args}`);
        return fn(...args);
    };
    const loggedAdd = withLogging(add);
    console.log(`Higher-Order Function: ${loggedAdd(2, 3)}`);

    // %% [4. Currying]
    const curryMultiply = a => b => a * b;
    const double = curryMultiply(2);
    console.log(`Curried Function: ${double(5)}`);

    // %% [5. Function Composition]
    const compose = (f, g) => x => f(g(x));
    const square = x => x * x;
    const increment = x => x + 1;
    const squareThenIncrement = compose(increment, square);
    console.log(`Function Composition: ${squareThenIncrement(3)}`);

    // %% [6. Practical Application]
    // Process synthetic data immutably for AI/ML-like task
    const data = [1, 2, 3];
    const normalize = x => x / Math.max(...data);
    const processData = data => Object.freeze(data.map(normalize));
    console.log(`Immutable Data: ${processData(data)}`);

    // %% [7. Interview Scenario: Functional Programming]
    /*
    Interview Scenario: Functional Programming
    Q: What is a pure function and why is it important?
    A: A pure function has no side effects and returns the same output for the same input.
    Key: Pure functions improve predictability and testability.
    Example: const add = (a, b) => a + b;
    */
}

// Execute the demo
runFunctionalProgrammingDemo();