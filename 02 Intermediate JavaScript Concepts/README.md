# 🧩 Intermediate JavaScript Concepts

## 📖 Introduction
Building on the **Core JavaScript Foundations**, this section, **Intermediate JavaScript Concepts**, dives into advanced techniques for creating robust, efficient, and scalable web applications. It covers **Functional Programming**, **Advanced DOM and Events**, **Browser APIs**, **AJAX and APIs**, **Module Systems**, **Regular Expressions**, **Advanced Asynchronous Patterns**, and **Memory Management**, preparing you for AI/ML and web development interviews. These skills are crucial for browser-based ML (e.g., TensorFlow.js), dynamic UIs, and optimized code, complementing your Python (e.g., `neural_networks.py`), TensorFlow.js (e.g., `tensors_operations.html`), Keras, Matplotlib, Pandas, and NumPy expertise.

## 🎯 Learning Objectives
- Apply functional programming for predictable, testable code.
- Master advanced DOM manipulation and event handling for dynamic UIs.
- Leverage browser APIs for storage, graphics, and geolocation.
- Fetch and process API data with AJAX techniques.
- Organize code with modern module systems.
- Use regular expressions for pattern matching.
- Implement advanced async patterns for efficient workflows.
- Optimize memory usage to prevent leaks.

## 🔑 Key Concepts
- **Functional Programming**:
  - Pure Functions
  - Higher-Order Functions
  - Currying
  - Function Composition
  - Immutability
- **Advanced DOM and Events**:
  - Custom Events
  - Event Bubbling and Capturing
  - Form Handling
  - Dynamic Content Loading
  - Performance Optimization (Debouncing, Throttling)
- **Browser APIs**:
  - LocalStorage and SessionStorage
  - Canvas API
  - WebGL (via TensorFlow.js or Three.js)
  - Geolocation API
  - WebRTC
  - Service Workers
- **AJAX and APIs**:
  - XMLHttpRequest
  - Fetch API
  - Axios
  - Handling JSON
  - Cross-Origin Resource Sharing (CORS)
- **Module Systems**:
  - CommonJS
  - ES Modules
  - Module Bundlers (Webpack, Rollup)
  - Dynamic Imports
  - Tree Shaking
- **Regular Expressions**:
  - Pattern Matching
  - RegExp Methods (`test`, `exec`)
  - Common Patterns (Email, URL, Phone)
  - Lookaheads and Lookbehinds
  - Replacing with Callbacks
- **Advanced Asynchronous Patterns**:
  - Promise Chaining
  - `Promise.all`, `Promise.race`
  - Async Iterators
  - Concurrent Task Management
  - Error Handling Strategies
- **Memory Management**:
  - Garbage Collection
  - Memory Leaks
  - WeakMap and WeakSet
  - Optimizing Object References
  - Profiling with DevTools

## 📝 Example Walkthroughs
The following `.js` and `.html` file pairs demonstrate each subsection:

1. **`functional_programming.js` and `functional_programming.html`**:
   - Demonstrates pure functions, higher-order functions, currying, composition, and immutability.
   - Normalizes synthetic data immutably for an AI/ML-like task.
   - Outputs results to console and DOM.

   Example code:
   ```javascript
   const normalize = x => x / Math.max(...data);
   const processData = data => Object.freeze(data.map(normalize));
   ```

2. **`advanced_dom_events.js` and `advanced_dom_events.html`**:
   - Implements custom events, bubbling/capturing, form handling, and debouncing.
   - Dynamically loads synthetic data as a list.
   - Displays interactions in the browser.

   Example code:
   ```javascript
   const debounce = (fn, delay) => {
       let timeout;
       return (...args) => {
           clearTimeout(timeout);
           timeout = setTimeout(() => fn(...args), delay);
       };
   };
   ```

3. **`browser_apis.js` and `browser_apis.html`**:
   - Covers LocalStorage, Canvas API, and Geolocation API.
   - Stores and retrieves synthetic dataset.
   - Outputs to console and DOM, with a canvas visualization.

   Example code:
   ```javascript
   localStorage.setItem('dataset', JSON.stringify(dataset));
   ```

4. **`ajax_apis.js` and `ajax_apis.html`**:
   - Demonstrates XMLHttpRequest, Fetch API, and Axios for API calls.
   - Processes synthetic API data for an AI/ML-like task.
   - Displays results in the browser.

   Example code:
   ```javascript
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
   ```

5. **`module_systems.js` and `module_systems.html`**:
   - Simulates CommonJS, ES Modules, and dynamic imports.
   - Normalizes synthetic data modularly.
   - Outputs to console and DOM.

   Example code:
   ```javascript
   const dataModule = {
       normalize: data => data.map(x => x / Math.max(...data))
   };
   ```

6. **`regular_expressions.js` and `regular_expressions.html`**:
   - Implements pattern matching, RegExp methods, and common patterns.
   - Extracts numbers from synthetic data.
   - Displays results in the browser.

   Example code:
   ```javascript
   const numbers = data.match(/\d+/g);
   ```

7. **`advanced_async_patterns.js` and `advanced_async_patterns.html`**:
   - Covers Promise chaining, `Promise.all`, and async iterators.
   - Fetches concurrent API data for an AI/ML-like task.
   - Outputs to console and DOM.

   Example code:
   ```javascript
   const batchResults = await Promise.all([fetchBatch(1), fetchBatch(2)]);
   ```

8. **`memory_management.js` and `memory_management.html`**:
   - Demonstrates garbage collection, WeakMap, and reference optimization.
   - Manages memory for synthetic data in a cache.
   - Displays results in the browser.

   Example code:
   ```javascript
   const weakMap = new WeakMap();
   let key = { id: 1 };
   weakMap.set(key, 'Data');
   key = null;
   ```

## 🛠️ Practical Tasks
1. **Functional Programming**:
   - Write a curried function to preprocess data.
   - Compose functions to normalize and filter an array.
2. **Advanced DOM and Events**:
   - Create a custom event for data updates.
   - Implement throttling for a resize event listener.
3. **Browser APIs**:
   - Store a dataset in LocalStorage and retrieve it.
   - Draw a bar chart using the Canvas API.
4. **AJAX and APIs**:
   - Fetch and display data from a public API using Axios.
   - Handle CORS errors in a Fetch request.
5. **Module Systems**:
   - Simulate an ES Module for data processing.
   - Implement a dynamic import for a utility function.
6. **Regular Expressions**:
   - Validate a URL with a regex.
   - Extract phone numbers from a string.
7. **Advanced Asynchronous Patterns**:
   - Use `Promise.all` to fetch multiple APIs concurrently.
   - Write an async iterator for paginated data.
8. **Memory Management**:
   - Create a WeakMap-based cache for large datasets.
   - Profile a memory leak using DevTools.

## 💡 Interview Tips
- **Common Questions**:
  - What’s the difference between debouncing and throttling?
  - How does `Promise.all` improve performance?
  - What causes a memory leak in JavaScript?
- **Tips**:
  - Explain functional programming benefits (e.g., predictability).
  - Demonstrate API error handling (e.g., CORS, async errors).
  - Be ready to code a regex or optimize DOM performance.
- **Coding Tasks**:
  - Implement a debounced input handler.
  - Fetch and process API data with `Promise.all`.
  - Write a regex to validate an email.

## 📚 Resources
- [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript by Marijn Haverbeke](https://eloquentjavascript.net/)
- [You Don’t Know JS by Kyle Simpson](https://github.com/getify/You-Dont-Know-JS)
- [TensorFlow.js Documentation](https://js.tensorflow.org/) (for WebGL context)
- [Axios Documentation](https://axios-http.com/docs/intro)

## 🛠️ Setup Instructions
1. Place all `.js` and `.html` files in the same directory.
2. Install a local server (e.g., `live-server` via npm: `npm install -g live-server`).
3. Run `live-server` in the directory to serve the files.
4. Open each `.html` file in a browser to view outputs and interact with the demos.
5. Check the browser console for additional logs and errors.
6. Note: `ajax_apis.html` uses Axios via CDN; ensure internet access.