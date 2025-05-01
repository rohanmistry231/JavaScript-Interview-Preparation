// %% [1. Introduction to Control Flow]
// Learn JavaScript control flow for decision-making and iteration.

function runControlFlowDemo() {
    // %% [2. If-Else and Ternary]
    const score = 85;
    let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
    console.log(`Score: ${score}, Grade: ${grade}`);

    // %% [3. Switch Statement]
    const day = 'Monday';
    let message;
    switch (day) {
        case 'Monday':
            message = 'Start of the week';
            break;
        default:
            message = 'Another day';
    }
    console.log(`Day: ${day}, Message: ${message}`);

    // %% [4. Loops]
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i;
    }
    let count = 5;
    while (count > 0) {
        count--;
    }
    console.log(`For Loop Sum: ${sum}, While Loop Count: ${count}`);

    // %% [5. Break and Continue]
    let numbers = '';
    for (let i = 1; i <= 5; i++) {
        if (i === 3) continue;
        if (i === 5) break;
        numbers += i + ' ';
    }
    console.log(`Break/Continue Result: ${numbers}`);

    // %% [6. Practical Application]
    // Filter synthetic data for AI/ML-like task
    const data = [10, -5, 20, 0, 15];
    let positiveSum = 0;
    outer: for (const num of data) {
        if (num <= 0) continue outer;
        positiveSum += num;
    }
    console.log(`Positive Sum: ${positiveSum}`);

    // %% [7. Interview Scenario: Control Flow]
    /*
    Interview Scenario: Control Flow
    Q: How does the continue statement work in a loop?
    A: Skips the current iteration and proceeds to the next.
    Key: Use continue to bypass specific conditions in loops.
    Example: if (i === 3) continue; // Skips i=3
    */
}

// Execute the demo
runControlFlowDemo();