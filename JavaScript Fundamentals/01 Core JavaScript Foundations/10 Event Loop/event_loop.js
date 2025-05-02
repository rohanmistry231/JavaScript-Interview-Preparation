// %% [1. Introduction to Event Loop]
// Learn JavaScript event loop for async execution.

function runEventLoopDemo() {
    // %% [2. Call Stack]
    function first() { console.log('First'); second(); }
    function second() { console.log('Second'); }
    first();
    console.log('Call Stack Done');

    // %% [3. Task Queue with setTimeout]
    setTimeout(() => console.log('setTimeout: Delayed'), 0);
    console.log('After setTimeout');

    // %% [4. Microtask Queue with Promise]
    Promise.resolve('Promise: Microtask').then(console.log);
    console.log('After Promise');

    // %% [5. Practical Application]
    // Simulate async data processing for AI/ML-like task
    function processData() {
        console.log('Start Processing');
        setTimeout(() => console.log('Data Processed'), 1000);
        Promise.resolve('Metadata Ready').then(console.log);
        console.log('End Processing');
    }
    processData();

    // %% [6. Interview Scenario: Event Loop]
    /*
    Interview Scenario: Event Loop
    Q: How does the event loop handle tasks in JavaScript?
    A: The event loop processes the call stack, then microtasks, then tasks.
    Key: Microtasks (Promises) run before tasks (setTimeout).
    Example: Promise.resolve().then(() => console.log('Microtask'));
    */
}

// Execute the demo
runEventLoopDemo();