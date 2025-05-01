// %% [1. Introduction to Advanced DOM and Events]
// Learn advanced DOM manipulation and event handling.

function runAdvancedDOMEventsDemo() {
    // %% [2. Custom Events]
    const customEvent = new CustomEvent('dataLoaded', { detail: { value: 42 } });
    document.addEventListener('dataLoaded', e => console.log(`Custom Event: ${e.detail.value}`));
    document.dispatchEvent(customEvent);

    // %% [3. Event Bubbling and Capturing]
    const parent = document.createElement('div');
    const child = document.createElement('button');
    child.textContent = 'Click Me';
    parent.appendChild(child);
    document.body.appendChild(parent);
    parent.addEventListener('click', () => console.log('Parent Click (Bubbling)'), false);
    child.addEventListener('click', () => console.log('Child Click (Bubbling)'), false);
    parent.addEventListener('click', () => console.log('Parent Click (Capturing)'), true);

    // %% [4. Form Handling]
    const form = document.createElement('input');
    form.type = 'text';
    form.placeholder = 'Enter data';
    form.addEventListener('input', e => console.log(`Form Input: ${e.target.value}`));
    document.body.appendChild(form);

    // %% [5. Debouncing]
    const debounce = (fn, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    };
    const logInput = debounce(value => console.log(`Debounced Input: ${value}`), 500);
    form.addEventListener('input', e => logInput(e.target.value));

    // %% [6. Practical Application]
    // Dynamic content loading for AI/ML-like task
    const loadData = () => {
        const ul = document.createElement('ul');
        [10, 20, 30].forEach(value => {
            const li = document.createElement('li');
            li.textContent = `Value: ${value}`;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
        console.log('Dynamic Content Loaded');
    };
    setTimeout(loadData, 1000);

    // %% [7. Interview Scenario: Advanced DOM and Events]
    /*
    Interview Scenario: Advanced DOM and Events
    Q: What is debouncing and when would you use it?
    A: Debouncing delays function execution to reduce frequent calls.
    Key: Use for input handling, resizing, or scrolling to optimize performance.
    Example: const debounce = (fn, delay) => { let timeout; return () => { clearTimeout(timeout); timeout = setTimeout(fn, delay); }; };
    */
}

// Execute the demo
runAdvancedDOMEventsDemo();