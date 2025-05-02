// %% [1. Introduction to Objects and Prototypes]
// Learn JavaScript objects and prototypal inheritance.

function runObjectsPrototypesDemo() {
    // %% [2. Object Literals]
    const person = { name: 'Alice', age: 30 };
    console.log(`Object Literal: ${JSON.stringify(person)}`);

    // %% [3. Constructor Functions]
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    const bob = new Person('Bob', 25);
    console.log(`Constructor: ${bob.name}, ${bob.age}`);

    // %% [4. Prototypal Inheritance]
    Person.prototype.greet = function () { return `Hi, I'm ${this.name}`; };
    console.log(`Prototype Method: ${bob.greet()}`);

    // %% [5. Object.create, Object.assign]
    const proto = { role: 'developer' };
    const dev = Object.create(proto);
    dev.name = 'Charlie';
    const merged = Object.assign({}, person, { role: 'manager' });
    console.log(`Object.create: ${dev.role}, Object.assign: ${merged.role}`);

    // %% [6. Practical Application]
    // Synthetic data for AI/ML-like task
    const dataset = [
        Object.create({ type: 'data', preprocess: function () { return this.value * 2; } }, { value: { value: 10 } }),
        Object.create({ type: 'data', preprocess: function () { return this.value * 2; } }, { value: { value: 20 } })
    ];
    const preprocessed = dataset.map(item => item.preprocess());
    console.log(`Preprocessed Data: ${preprocessed}`);

    // %% [7. Interview Scenario: Objects and Prototypes]
    /*
    Interview Scenario: Objects and Prototypes
    Q: How does prototypal inheritance work in JavaScript?
    A: Objects inherit properties from their prototype via the prototype chain.
    Key: Prototypes enable shared methods and efficient memory usage.
    Example: Person.prototype.greet = function () { return 'Hi'; };
    */
}

// Execute the demo
runObjectsPrototypesDemo();