// %% [1. Introduction to ES6+ Features]
// Learn modern JavaScript features for concise code.

function runES6FeaturesDemo() {
    // %% [2. Template Literals]
    const name = 'Alice';
    const greeting = `Hello, ${name}!`;
    console.log(`Template Literal: ${greeting}`);

    // %% [3. Destructuring]
    const person = { name: 'Bob', age: 25 };
    const { name: personName, age } = person;
    const [first, second] = [1, 2];
    console.log(`Destructuring: ${personName}, ${age}, ${first}, ${second}`);

    // %% [4. Modules (Simulated)]
    // Note: Modules require a module system; simulated here
    const module = { add: (a, b) => a + b };
    console.log(`Simulated Module: ${module.add(2, 3)}`);

    // %% [5. Classes and Symbols]
    class User {
        constructor(name) { this.name = name; }
        [Symbol('id')] = 123;
    }
    const user = new User('Charlie');
    console.log(`Class: ${user.name}, Symbol: ${user[Symbol('id')]}`);

    // %% [6. Practical Application]
    // Synthetic data processing with generators
    function* dataGenerator() {
        yield 1;
        yield 2;
        yield 3;
    }
    const data = [...dataGenerator()];
    console.log(`Generator Data: ${data}`);

    // %% [7. Interview Scenario: ES6+ Features]
    /*
    Interview Scenario: ES6+ Features
    Q: What are template literals and how are they useful?
    A: Template literals allow string interpolation with ${}.
    Key: They simplify string formatting and multi-line strings.
    Example: const greeting = `Hello, ${name}!`;
    */
}

// Execute the demo
runES6FeaturesDemo();