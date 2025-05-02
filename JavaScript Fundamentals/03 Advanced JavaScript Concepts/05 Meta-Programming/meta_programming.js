// %% [1. Introduction to Meta-Programming]
// Learn JavaScript meta-programming with Proxies.

function runMetaProgrammingDemo() {
    // %% [2. Proxies]
    const target = { data: 42 };
    const handler = {
        get: (obj, prop) => {
            console.log(`Accessed: ${prop}`);
            return obj[prop];
        }
    };
    const proxy = new Proxy(target, handler);
    console.log(`Proxy: ${proxy.data}`);

    // %% [3. Reflect API]
    const obj = { value: 10 };
    Reflect.set(obj, 'value', 20);
    console.log(`Reflect: ${Reflect.get(obj, 'value')}`);

    // %% [4. Practical Application]
    // Track synthetic data access for AI/ML-like task
    const dataset = { points: [1, 2, 3] };
    const dataProxy = new Proxy(dataset, {
        get: (obj, prop) => {
            console.log(`Dataset Accessed: ${prop}`);
            return obj[prop];
        }
    });
    console.log(`Data Proxy: ${dataProxy.points}`);

    // %% [5. Interview Scenario: Meta-Programming]
    /*
    Interview Scenario: Meta-Programming
    Q: What is a Proxy and how is it used?
    A: A Proxy intercepts operations on an object, like get or set.
    Key: Use for logging, validation, or custom behavior.
    Example: const proxy = new Proxy(target, { get: (obj, prop) => obj[prop] });
    */
}

// Execute the demo
runMetaProgrammingDemo();