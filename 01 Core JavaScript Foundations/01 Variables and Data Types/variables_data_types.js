// %% [1. Introduction to Variables and Data Types]
// Learn core JavaScript variables and data types for web development.

function runVariablesDemo() {
    // %% [2. var, let, const]
    var globalVar = 'I am global';
    let blockVar = 'I am block-scoped';
    const constant = 'I am constant';
    console.log(`var: ${globalVar}, let: ${blockVar}, const: ${constant}`);

    // %% [3. Primitive Types]
    const number = 42;
    const string = 'Hello';
    const boolean = true;
    const undefinedVar = undefined;
    const nullVar = null;
    const symbol = Symbol('id');
    console.log(`Types: ${typeof number}, ${typeof string}, ${typeof boolean}, ${typeof undefinedVar}, ${typeof nullVar}, ${typeof symbol}`);

    // %% [4. Objects and Arrays]
    const obj = { name: 'Alice', age: 30 };
    const arr = [1, 2, 3];
    console.log(`Object: ${JSON.stringify(obj)}, Array: ${arr}`);

    // %% [5. Type Coercion and Truthy/Falsy]
    const coerced = '5' + 5; // '55'
    const truthy = 'hello' ? 'Truthy' : 'Falsy';
    const falsy = 0 ? 'Truthy' : 'Falsy';
    console.log(`Coercion: ${coerced}, Truthy: ${truthy}, Falsy: ${falsy}`);

    // %% [6. Practical Application]
    // Synthetic data processing for AI/ML-like task
    const data = [10, '20', true, null];
    const processed = data.map(item => typeof item);
    console.log(`Processed Data Types: ${processed.join(', ')}`);

    // %% [7. Interview Scenario: Variables and Data Types]
    /*
    Interview Scenario: Variables and Data Types
    Q: What's the difference between var, let, and const?
    A: var is function-scoped, let and const are block-scoped; const cannot be reassigned.
    Key: Use let for variables, const for constants to avoid scoping issues.
    Example: let x = 10; const y = 20;
    */
}

// Execute the demo
runVariablesDemo();