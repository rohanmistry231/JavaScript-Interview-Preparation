// %% [1. Introduction to Array Methods]
// Learn JavaScript array methods for data manipulation.

function runArrayMethodsDemo() {
    // %% [2. map, filter, reduce]
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(n => n * 2);
    const evens = numbers.filter(n => n % 2 === 0);
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    console.log(`Map: ${doubled}, Filter: ${evens}, Reduce: ${sum}`);

    // %% [3. forEach, find, some, every]
    numbers.forEach(n => console.log(`forEach: ${n}`));
    const found = numbers.find(n => n > 3);
    const hasEven = numbers.some(n => n % 2 === 0);
    const allPositive = numbers.every(n => n > 0);
    console.log(`Find: ${found}, Some: ${hasEven}, Every: ${allPositive}`);

    // %% [4. slice, splice, concat]
    const sliced = numbers.slice(1, 3);
    const spliced = numbers.splice(2, 1, 10);
    const concatenated = numbers.concat([6, 7]);
    console.log(`Slice: ${sliced}, Splice: ${spliced}, Concat: ${concatenated}`);

    // %% [5. sort, reverse]
    const unsorted = [3, 1, 4, 2];
    const sorted = [...unsorted].sort((a, b) => a - b);
    const reversed = [...unsorted].reverse();
    console.log(`Sort: ${sorted}, Reverse: ${reversed}`);

    // %% [6. Practical Application]
    // Process synthetic data for AI/ML-like task
    const data = [10, -5, 20, 0, 15];
    const normalized = data.map(x => x / Math.max(...data));
    console.log(`Normalized Data: ${normalized}`);

    // %% [7. Interview Scenario: Array Methods]
    /*
    Interview Scenario: Array Methods
    Q: How does reduce work and when would you use it?
    A: reduce applies a function to accumulate a single value from an array.
    Key: Use reduce for summing, flattening, or transforming arrays.
    Example: numbers.reduce((acc, n) => acc + n, 0);
    */
}

// Execute the demo
runArrayMethodsDemo();