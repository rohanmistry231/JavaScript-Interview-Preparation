// %% [1. Introduction to Web Performance Optimization]
// Learn JavaScript techniques for optimizing web performance.

function runWebPerformanceDemo() {
    // %% [2. Lazy Loading]
    const img = document.createElement('img');
    img.setAttribute('loading', 'lazy');
    img.src = 'https://via.placeholder.com/150';
    document.body.appendChild(img);
    console.log('Lazy Loading: Image added with loading="lazy"');

    // %% [3. Code Splitting (Simulated)]
    const loadModule = () => Promise.resolve({ compute: () => 'Computed' });
    loadModule().then(module => console.log(`Code Splitting: ${module.compute()}`));

    // %% [4. Reducing Reflows and Repaints]
    const optimizeDOM = () => {
        const div = document.createElement('div');
        div.style.cssText = 'width: 100px; height: 100px; background: blue;';
        document.body.appendChild(div);
        console.log('Optimized DOM: Styles set in one operation');
    };
    optimizeDOM();

    // %% [5. Practical Application]
    // Optimize synthetic data rendering for AI/ML-like task
    const data = Array(100).fill().map((_, i) => ({ id: i, value: Math.random() }));
    const renderData = () => {
        const fragment = document.createDocumentFragment();
        data.slice(0, 10).forEach(item => {
            const p = document.createElement('p');
            p.textContent = `ID: ${item.id}, Value: ${item.value}`;
            fragment.appendChild(p);
        });
        document.body.appendChild(fragment);
        console.log('Optimized Rendering: Used DocumentFragment');
    };
    setTimeout(renderData, 1000);

    // %% [6. Interview Scenario: Web Performance Optimization]
    /*
    Interview Scenario: Web Performance Optimization
    Q: What are reflows and how can you minimize them?
    A: Reflows occur when the browser recalculates layout; minimize by batching DOM updates.
    Key: Use DocumentFragment or cssText to reduce reflows.
    Example: const fragment = document.createDocumentFragment();
    */
}

// Execute the demo
runWebPerformanceDemo();