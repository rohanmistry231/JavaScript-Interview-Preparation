// %% [1. Introduction to Error Handling]
// Learn JavaScript error handling for robust code.

function runErrorHandlingDemo() {
    // %% [2. Try-Catch]
    try {
        const result = undefinedVar * 2;
    } catch (error) {
        console.log(`Try-Catch Error: ${error.message}`);
    }

    // %% [3. Throw and Custom Errors]
    function divide(a, b) {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
    }
    try {
        const result = divide(10, 0);
    } catch (error) {
        console.log(`Custom Error: ${error.message}`);
    }

    // %% [4. Error Objects]
    try {
        throw new TypeError('Invalid type');
    } catch (error) {
        console.log(`Error Type: ${error.name}, Message: ${error.message}`);
    }

    // %% [5. Practical Application]
    // Validate synthetic data for AI/ML-like task
    const data = [1, '2', null];
    const validated = [];
    for (const item of data) {
        try {
            if (typeof item !== 'number') throw new Error('Non-numeric value');
            validated.push(item);
        } catch (error) {
            console.log(`Validation Error: ${error.message} for ${item}`);
        }
    }
    console.log(`Validated Data: ${validated}`);

    // %% [6. Interview Scenario: Error Handling]
    /*
    Interview Scenario: Error Handling
    Q: How do you handle errors in JavaScript?
    A: Use try-catch to catch exceptions and throw to raise custom errors.
    Key: Proper error handling ensures robust applications.
    Example: try { throw new Error('Test'); } catch (e) { console.log(e.message); }
    */
}

// Execute the demo
runErrorHandlingDemo();