// %% [1. Introduction to Server-Side JavaScript]
// Learn server-side JavaScript with Express.

// Note: Simulated for browser; run with Node.js locally
function runServerSideDemo() {
    // %% [2. Express.js (Simulated)]
    const simulateExpress = () => ({
        get: (path, handler) => console.log(`GET ${path}: ${handler({ query: { id: 1 } }, {})}`),
        listen: port => console.log(`Server listening on port ${port}`)
    });
    const app = simulateExpress();
    app.get('/api/data', (req, res) => `Data for ID ${req.query.id}`);
    app.listen(3000);

    // %% [3. Practical Application]
    // Simulate API for synthetic data in AI/ML-like task
    const simulateAPI = () => ({
        get: (path, handler) => console.log(`API Response: ${handler({}, {})}`)
    });
    const api = simulateAPI();
    api.get('/api/dataset', () => JSON.stringify([{ id: 1, value: 10 }]));
    console.log('Simulated API: Synthetic dataset served');

    // %% [4. Interview Scenario: Server-Side JavaScript]
    /*
    Interview Scenario: Server-Side JavaScript
    Q: How does the Node.js event loop differ from the browser?
    A: Node.js event loop handles I/O and timers, not DOM events.
    Key: Optimized for server-side tasks like file I/O and networking.
    Example: app.get('/data', (req, res) => res.json({ data: 'value' }));
    */
}

// Execute the demo
runServerSideDemo();