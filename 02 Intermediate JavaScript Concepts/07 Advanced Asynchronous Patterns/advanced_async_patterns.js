// %% [1. Introduction to Advanced Asynchronous Patterns]
// Learn advanced async patterns for efficient code.

async function runAdvancedAsyncPatternsDemo() {
    // %% [2. Promise Chaining]
    const fetchData = () => Promise.resolve([1, 2, 3]);
    fetchData()
        .then(data => data.map(x => x * 2))
        .then(result => console.log(`Promise Chaining: ${result}`));

    // %% [3. Promise.all]
    const promises = [
        Promise.resolve(10),
        Promise.resolve(20),
        Promise.resolve(30)
    ];
    const allResults = await Promise.all(promises);
    console.log(`Promise.all: ${allResults}`);

    // %% [4. Async Iterators]
    async function* asyncGenerator() {
        yield await Promise.resolve(1);
        yield await Promise.resolve(2);
        yield await Promise.resolve(3);
    }
    for await (const value of asyncGenerator()) {
        console.log(`Async Iterator: ${value}`);
    }

    // %% [5. Practical Application]
    // Concurrent data fetching for AI/ML-like task
    const fetchBatch = id => fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
    const batchResults = await Promise.all([fetchBatch(1), fetchBatch(2)]);
    console.log(`Concurrent Fetch: ${batchResults.map(post => post.title).join(', ')}`);

    // %% [6. Interview Scenario: Advanced Asynchronous Patterns]
    /*
    Interview Scenario: Advanced Asynchronous Patterns
    Q: What is Promise.all and when would you use it?
    A: Promise.all runs multiple Promises concurrently and resolves when all complete.
    Key: Use for parallel API calls to improve performance.
    Example: Promise.all([fetch('url1'), fetch('url2')]);
    */
}

// Execute the demo
runAdvancedAsyncPatternsDemo();