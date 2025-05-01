// %% [1. Introduction to Memory Management]
// Learn JavaScript memory management for efficient code.

function runMemoryManagementDemo() {
    // %% [2. Garbage Collection]
    let obj = { data: [1, 2, 3] };
    obj = null; // Mark for garbage collection
    console.log('Garbage Collection: Object marked for cleanup');

    // %% [3. WeakMap]
    const weakMap = new WeakMap();
    let key = { id: 1 };
    weakMap.set(key, 'Data');
    console.log(`WeakMap: ${weakMap.get(key)}`);
    key = null; // Key can be garbage collected
    console.log('WeakMap: Key marked for cleanup');

    // %% [4. Optimizing Object References]
    const cache = new Map();
    const addToCache = (id, value) => {
        if (cache.size > 100) cache.clear();
        cache.set(id, value);
    };
    addToCache(1, [1, 2, 3]);
    console.log(`Optimized Cache: ${cache.size}`);

    // %% [5. Practical Application]
    // Manage memory for synthetic data in AI/ML-like task
    const largeData = Array(1000).fill({ value: Math.random() });
    const weakCache = new WeakMap();
    largeData.forEach((item, i) => weakCache.set({ id: i }, item));
    console.log(`WeakCache Size: ${weakCache.has({ id: 0 })} (keys are temporary)`);

    // %% [6. Interview Scenario: Memory Management]
    /*
    Interview Scenario: Memory Management
    Q: What is a memory leak and how can you prevent it?
    A: A memory leak occurs when unused objects remain in memory.
    Key: Use WeakMap/WeakSet and nullify references to prevent leaks.
    Example: let obj = { data: [] }; obj = null;
    */
}

// Execute the demo
runMemoryManagementDemo();