# 🏗️ Core JavaScript Foundations

## 📖 Introduction
JavaScript is the backbone of web-based AI/ML and dynamic applications, powering everything from DOM manipulation to TensorFlow.js models. This section, **Core JavaScript Foundations**, establishes the essential skills needed for web development and AI/ML interviews. It covers **Variables and Data Types**, **Control Flow**, **Functions**, **Array Methods**, **Error Handling**, **Objects and Prototypes**, **DOM Manipulation**, **Asynchronous JavaScript**, **ES6+ Features**, and **Event Loop**, providing a solid foundation for intermediate and advanced JavaScript concepts. This complements your Python (e.g., `neural_networks.py`), TensorFlow.js (e.g., `tensors_operations.html`), Keras, Matplotlib, Pandas, and NumPy skills.

## 🎯 Learning Objectives
- Master JavaScript variables, data types, and scoping for robust code.
- Implement control flow for decision-making and iteration.
- Write reusable functions with modern features like closures and arrow functions.
- Manipulate arrays and handle errors for data processing.
- Understand objects, prototypes, DOM, async programming, ES6+ features, and the event loop for web ML.

## 🔑 Key Concepts
- **Variables and Data Types**:
  - `var`, `let`, `const`
  - Primitive Types (Number, String, Boolean, Undefined, Null, Symbol)
  - Objects and Arrays
  - Type Coercion
  - Truthy and Falsy Values
- **Control Flow**:
  - If-Else Statements
  - Switch Statements
  - Ternary Operator
  - For Loops
  - While Loops
  - Do-While Loops
  - Break and Continue
  - Labels
- **Functions**:
  - Function Declarations and Expressions
  - Arrow Functions
  - Default Parameters
  - Rest and Spread Operators
  - Closures
  - Immediately Invoked Function Expressions (IIFEs)
  - Function Hoisting
- **Array Methods**:
  - `map`, `filter`, `reduce`
  - `forEach`, `find`, `some`, `every`
  - `slice`, `splice`, `concat`
  - `sort`, `reverse`
  - Array Destructuring
- **Error Handling**:
  - Try-Catch
  - Throw Statement
  - Custom Errors
  - Error Objects
  - Async Error Handling
- **Objects and Prototypes**:
  - Object Literals
  - Constructor Functions
  - Prototypal Inheritance
  - `Object.create`, `Object.assign`
  - Getters and Setters
  - Property Descriptors
- **DOM Manipulation**:
  - Selecting Elements (`querySelector`, `getElementById`)
  - Event Listeners
  - Modifying DOM (Attributes, Classes, Content)
  - Event Delegation
  - Browser Events (Click, Input, Load)
- **Asynchronous JavaScript**:
  - Callbacks
  - Promises
  - Async/Await
  - `setTimeout`, `setInterval`
  - Fetch API
  - Error Handling in Async Code
- **ES6+ Features**:
  - Template Literals
  - Destructuring Assignment
  - Modules (`import`, `export`)
  - Classes
  - Symbols
  - Iterators and Generators
  - Optional Chaining (`?.`)
  - Nullish Coalescing (`??`)
- **Event Loop**:
  - Call Stack
  - Task Queue
  - Microtask Queue
  - `setTimeout` vs. `Promise`
  - Browser Rendering

## 📝 Example Walkthroughs
The following `.js` and `.html` file pairs demonstrate each subsection:

1. **`variables_data_types.js` and `variables_data_types.html`**:
   - Demonstrates `var`, `let`, `const`, primitive types, objects, arrays, type coercion, and truthy/falsy values.
   - Processes synthetic data types for an AI/ML-like task.
   - Outputs results to the console and DOM.

   Example code:
   ```javascript
   const data = [10, '20', true, null];
   const processed = data.map(item => typeof item);
   ```

2. **`control_flow.js` and `control_flow.html`**:
   - Implements if-else, switch, loops, break, continue, and labels.
   - Filters synthetic data to sum positive values.
   - Displays results in the browser.

   Example code:
   ```javascript
   outer: for (const num of data) {
       if (num <= 0) continue outer;
       positiveSum += num;
   }
   ```

3. **`functions.js` and `functions.html`**:
   - Covers function declarations, expressions, arrow functions, rest/spread, closures, and IIFEs.
   - Processes synthetic data with an IIFE.
   - Shows results via DOM.

   Example code:
   ```javascript
   const processed = (function (data) {
       return data.map(x => x * 2);
   })([1, 2, 3]);
   ```

4. **`array_methods.js` and `array_methods.html`**:
   - Demonstrates `map`, `filter`, `reduce`, `forEach`, `find`, `some`, `every`, `slice`, `splice`, `concat`, `sort`, `reverse`.
   - Normalizes synthetic data for an AI/ML-like task.
   - Outputs to console and DOM.

   Example code:
   ```javascript
   const normalized = data.map(x => x / Math.max(...data));
   ```

5. **`error_handling.js` and `error_handling.html`**:
   - Implements try-catch, throw, custom errors, and error objects.
   - Validates synthetic data for non-numeric values.
   - Displays errors in the browser.

   Example code:
   ```javascript
   if (typeof item !== 'number') throw new Error('Non-numeric value');
   ```

6. **`objects_prototypes.js` and `objects_prototypes.html`**:
   - Covers object literals, constructor functions, prototypal inheritance, `Object.create`, `Object.assign`.
   - Preprocesses synthetic data using prototypes.
   - Shows results via DOM.

   Example code:
   ```javascript
   Person.prototype.greet = function () { return `Hi, I'm ${this.name}`; };
   ```

7. **`dom_manipulation.js` and `dom_manipulation.html`**:
   - Demonstrates element selection, event listeners, DOM modification, and event delegation.
   - Visualizes synthetic data as a list in the DOM.
   - Outputs interactions to the browser.

   Example code:
   ```javascript
   document.body.addEventListener('click', (e) => {
       if (e.target.tagName === 'BUTTON') { console.log('Delegated Button Click'); }
   });
   ```

8. **`async_javascript.js` and `async_javascript.html`**:
   - Implements callbacks, Promises, async/await, and Fetch API.
   - Processes synthetic API data for an AI/ML-like task.
   - Displays async results in the browser.

   Example code:
   ```javascript
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   ```

9. **`es6_features.js` and `es6_features.html`**:
   - Covers template literals, destructuring, modules (simulated), classes, Symbols, and generators.
   - Processes synthetic data with a generator.
   - Shows results via DOM.

   Example code:
   ```javascript
   function* dataGenerator() { yield 1; yield 2; yield 3; }
   ```

10. **`event_loop.js` and `event_loop.html`**:
    - Demonstrates call stack, task queue, microtask queue, and `setTimeout` vs. `Promise`.
    - Simulates async data processing for an AI/ML-like task.
    - Outputs execution order in the browser.

    Example code:
    ```javascript
    Promise.resolve('Promise: Microtask').then(console.log);
    setTimeout(() => console.log('setTimeout: Delayed'), 0);
    ```

## 🛠️ Practical Tasks
1. **Variables and Data Types**:
   - Write a function to detect falsy values in an array.
   - Create an object to represent a dataset and log its types.
2. **Control Flow**:
   - Implement a grading system using if-else and switch.
   - Write a loop to sum even numbers in an array.
3. **Functions**:
   - Create a closure to track API calls.
   - Write an IIFE to preprocess an array.
4. **Array Methods**:
   - Normalize an array using `map` and `reduce`.
   - Filter and sort a dataset of objects.
5. **Error Handling**:
   - Validate an array for numeric values with try-catch.
   - Throw a custom error for invalid inputs.
6. **Objects and Prototypes**:
   - Create a prototype chain for a data processor.
   - Merge objects using `Object.assign`.
7. **DOM Manipulation**:
   - Build a dynamic list with event delegation.
   - Create a button that toggles a class on click.
8. **Asynchronous JavaScript**:
   - Fetch data from a public API and display it.
   - Chain Promises to process synthetic data.
9. **ES6+ Features**:
   - Use template literals to format a dataset summary.
   - Write a generator for paginated data.
10. **Event Loop**:
    - Simulate a task queue with `setTimeout` and Promises.
    - Log the execution order of async tasks.

## 💡 Interview Tips
- **Common Questions**:
  - What’s the difference between `var`, `let`, and `const`?
  - How does a closure work in JavaScript?
  - What’s the role of the event loop in async code?
- **Tips**:
  - Explain scoping rules clearly (e.g., block vs. function scope).
  - Demonstrate async patterns (e.g., Promises vs. async/await).
  - Be ready to code DOM manipulation or array processing tasks.
- **Coding Tasks**:
  - Reverse an array using `reduce`.
  - Implement a Promise-based API fetch with error handling.
  - Create a closure-based counter.

## 📚 Resources
- [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript by Marijn Haverbeke](https://eloquentjavascript.net/)
- [You Don’t Know JS by Kyle Simpson](https://github.com/getify/You-Dont-Know-JS)
- [TensorFlow.js Documentation](https://js.tensorflow.org/) (for AI/ML context)

## 🛠️ Setup Instructions
1. Place all `.js` and `.html` files in the same directory.
2. Install a local server (e.g., `live-server` via npm: `npm install -g live-server`).
3. Run `live-server` in the directory to serve the files.
4. Open each `.html` file in a browser to view outputs and interact with the demos.
5. Check the browser console for additional logs and errors.