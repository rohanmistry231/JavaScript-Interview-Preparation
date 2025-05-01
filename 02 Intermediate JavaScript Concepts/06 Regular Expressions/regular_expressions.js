// %% [1. Introduction to Regular Expressions]
// Learn JavaScript regular expressions for pattern matching.

function runRegularExpressionsDemo() {
    // %% [2. Pattern Matching]
    const text = 'Hello, world!';
    const regex = /world/;
    console.log(`Pattern Match: ${regex.test(text)}`);

    // %% [3. RegExp Methods]
    const match = text.match(/world/);
    const execResult = regex.exec(text);
    console.log(`Match: ${match}, Exec: ${execResult ? execResult[0] : null}`);

    // %% [4. Common Patterns]
    const email = 'user@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(`Email Validation: ${emailRegex.test(email)}`);

    // %% [5. Practical Application]
    // Extract numbers from synthetic data for AI/ML-like task
    const data = 'Data: 10, 20, 30';
    const numbers = data.match(/\d+/g);
    console.log(`Extracted Numbers: ${numbers}`);

    // %% [6. Interview Scenario: Regular Expressions]
    /*
    Interview Scenario: Regular Expressions
    Q: How do you validate an email address with a regex?
    A: Use a pattern to match the email format, ensuring valid characters and structure.
    Key: Ensure robust patterns for production use.
    Example: /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    */
}

// Execute the demo
runRegularExpressionsDemo();