// %% [1. Introduction to Asynchronous JavaScript]
// Learn JavaScript async programming for non-blocking code.

async function runAsyncDemo() {
    // %% [2. Callbacks]
    function fetchData(callback) {
        setTimeout(() => callback('Data fetched'), 1000);
    }
    fetchData(data => console.log(`Callback: ${data}`));

    // %% [3. Promises]
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise resolved'), 1000);
    });
    promise.then(result => console.log(`Promise: ${result}`));

    // %% [4. Async/Await]
    async function getData() {
        const result = await new Promise(resolve => setTimeout(() => resolve('Async data'), 1000));
        console.log(`Async/Await: ${result}`);
    }
    await getData();

    // %% [5. Fetch API]
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(`Fetch API: ${data.title}`);
    } catch (error) {
        console.log(`Fetch Error: ${error.message}`);
    }

    // %% [6. Practical Application]
    // Synthetic data fetch for AI/ML-like task
    const fakeAPI = () => new Promise(resolve => setTimeout(() => resolve([1, 2, 3]), 1000));
    const processed = await fakeAPI().then(data => data.map(x => x * 2));
    console.log(`Processed API Data: ${processed}`);

    // %% [7. Interview Scenario: Asynchronous JavaScript]
    /*
    Interview Scenario: Asynchronous JavaScript
    Q: What’s the difference between Promises and async/await?
    A: Promises use .then() for async results; async/await is syntactic sugar for cleaner code.
    Key: Async/await improves readability for sequential async operations.
    Example: async function getData() { const result = await fetch(...); }
    */
}

// Execute the demo
runAsyncDemo();