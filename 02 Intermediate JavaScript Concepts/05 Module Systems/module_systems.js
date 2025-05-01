// %% [1. Introduction to Module Systems]
// Learn JavaScript module systems for organized code.

// Note: Modules require a module system; simulated here for demo
function runModuleSystemsDemo() {
    // %% [2. CommonJS (Simulated)]
    const commonJSModule = {
        add: (a, b) => a + b
    };
    console.log(`CommonJS (Simulated): ${commonJSModule.add(2, 3)}`);

    // %% [3. ES Modules (Simulated)]
    const esModule = {
        multiply: (a, b) => a * b
    };
    console.log(`ES Module (Simulated): ${esModule.multiply(2, 3)}`);

    // %% [4. Dynamic Imports (Simulated)]
    const dynamicImport = () => Promise.resolve({ divide: (a, b) => a / b });
    dynamicImport().then(module => console.log(`Dynamic Import: ${module.divide(6, 2)}`));

    // %% [5. Practical Application]
    // Modular data processing for AI/ML-like task
    const dataModule = {
        normalize: data => data.map(x => x / Math.max(...data))
    };
    const data = [10, 20, 30];
    console.log(`Modular Data: ${dataModule.normalize(data)}`);

    // %% [6. Interview Scenario: Module Systems]
    /*
    Interview Scenario: Module Systems
    Q: What are the differences between CommonJS and ES Modules?
    A: CommonJS uses require/exports, is synchronous; ES Modules use import/export, support async.
    Key: ES Modules are standard for modern JavaScript.
    Example: import { add } from './module.js';
    */
}

// Execute the demo
runModuleSystemsDemo();