// %% [1. Introduction to AJAX and APIs]
// Learn JavaScript AJAX and API handling for data fetching.

async function runAjaxAPIsDemo() {
    // %% [2. XMLHttpRequest]
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    xhr.onload = () => console.log(`XMLHttpRequest: ${xhr.responseText}`);
    xhr.send();

    // %% [3. Fetch API]
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
        const data = await response.json();
        console.log(`Fetch API: ${data.title}`);
    } catch (error) {
        console.log(`Fetch Error: ${error.message}`);
    }

    // %% [4. Axios]
    // Note: Axios included via CDN in HTML
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/3');
        console.log(`Axios: ${response.data.title}`);
    } catch (error) {
        console.log(`Axios Error: ${error.message}`);
    }

    // %% [5. Practical Application]
    // Fetch synthetic data for AI/ML-like task
    const fakeAPI = () => fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
    const processed = await fakeAPI().then(posts => posts.slice(0, 3).map(post => post.title));
    console.log(`Processed API Data: ${processed.join(', ')}`);

    // %% [6. Interview Scenario: AJAX and APIs]
    /*
    Interview Scenario: AJAX and APIs
    Q: What is CORS and how does it affect API requests?
    A: CORS restricts cross-origin requests for security; servers must allow specific origins.
    Key: Use proper headers or proxies to handle CORS issues.
    Example: fetch('https://api.example.com', { mode: 'cors' });
    */
}

// Execute the demo
runAjaxAPIsDemo();