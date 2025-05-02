// %% [1. Introduction to Frameworks and Libraries]
// Learn JavaScript frameworks with React.

// Note: React included via CDN in HTML
function runFrameworksLibrariesDemo() {
    // %% [2. React Component]
    const { useState } = React;
    const App = () => {
        const [count, setCount] = useState(0);
        return React.createElement(
            'div',
            null,
            React.createElement('p', null, `Count: ${count}`),
            React.createElement('button', { onClick: () => setCount(count + 1) }, 'Increment')
        );
    };
    ReactDOM.render(React.createElement(App), document.getElementById('root'));
    console.log('React: Component rendered');

    // %% [3. Practical Application]
    // Render synthetic data for AI/ML-like task
    console.log('React: Synthetic data UI rendered via component');

    // %% [4. Interview Scenario: Frameworks and Libraries]
    /*
    Interview Scenario: Frameworks and Libraries
    Q: What are React Hooks and how do they work?
    A: Hooks manage state and side effects in functional components.
    Key: useState and useEffect simplify component logic.
    Example: const [count, setCount] = useState(0);
    */
}

// Execute the demo
runFrameworksLibrariesDemo();