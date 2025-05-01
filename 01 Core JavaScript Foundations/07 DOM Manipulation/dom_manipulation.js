// %% [1. Introduction to DOM Manipulation]
// Learn JavaScript DOM manipulation for dynamic web pages.

function runDOMManipulationDemo() {
    // %% [2. Selecting Elements]
    const output = document.getElementById('output');
    const header = document.querySelector('h1');
    console.log(`Selected Header: ${header.textContent}`);

    // %% [3. Event Listeners]
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.addEventListener('click', () => {
        console.log('Button Clicked');
    });
    document.body.appendChild(button);

    // %% [4. Modifying DOM]
    output.style.color = 'blue';
    output.classList.add('highlight');
    console.log(`Modified DOM: Color set to blue, Class added`);

    // %% [5. Event Delegation]
    document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            console.log('Delegated Button Click');
        }
    });

    // %% [6. Practical Application]
    // Synthetic data visualization for AI/ML-like task
    const data = [10, 20, 30];
    const ul = document.createElement('ul');
    data.forEach(value => {
        const li = document.createElement('li');
        li.textContent = `Value: ${value}`;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
    console.log(`Data List Added to DOM`);

    // %% [7. Interview Scenario: DOM Manipulation]
    /*
    Interview Scenario: DOM Manipulation
    Q: What is event delegation and why use it?
    A: Event delegation attaches a single listener to a parent for child events.
    Key: Reduces memory usage and handles dynamic elements.
    Example: parent.addEventListener('click', e => { if (e.target.tagName === 'BUTTON') { ... } });
    */
}

// Execute the demo
runDOMManipulationDemo();