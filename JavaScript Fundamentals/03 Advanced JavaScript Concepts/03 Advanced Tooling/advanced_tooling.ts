// %% [1. Introduction to Advanced Tooling]
// Learn advanced tooling with TypeScript and testing.

// Note: TypeScript compiled to JS via CDN in HTML
function runAdvancedToolingDemo() {
    // %% [2. TypeScript Integration]
    interface DataPoint {
        id: number;
        value: number;
    }
    const data: DataPoint[] = [{ id: 1, value: 10 }, { id: 2, value: 20 }];
    console.log(`TypeScript: ${JSON.stringify(data)}`);

    // %% [3. Jest Testing (Simulated)]
    const add = (a: number, b: number): number => a + b;
    const testAdd = () => {
        const result = add(2, 3);
        console.log(`Jest (Simulated): add(2, 3) === 5: ${result === 5}`);
    };
    testAdd();

    // %% [4. Practical Application]
    // Process synthetic data with TypeScript for AI/ML-like task
    const normalize = (data: DataPoint[]): DataPoint[] => {
        const max = Math.max(...data.map(d => d.value));
        return data.map(d => ({ ...d, value: d.value / max }));
    };
    console.log(`Normalized Data: ${JSON.stringify(normalize(data))}`);

    // %% [5. Interview Scenario: Advanced Tooling]
    /*
    Interview Scenario: Advanced Tooling
    Q: How does TypeScript improve JavaScript development?
    A: TypeScript adds static typing, catching errors at compile time.
    Key: Enhances code reliability and IDE support.
    Example: interface User { name: string; age: number; }
    */
}

// Execute the demo
runAdvancedToolingDemo();