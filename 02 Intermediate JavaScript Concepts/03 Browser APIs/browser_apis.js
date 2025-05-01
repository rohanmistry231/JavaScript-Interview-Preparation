// %% [1. Introduction to Browser APIs]
// Learn JavaScript browser APIs for enhanced web functionality.

function runBrowserAPIsDemo() {
    // %% [2. LocalStorage and SessionStorage]
    localStorage.setItem('data', JSON.stringify([1, 2, 3]));
    const storedData = JSON.parse(localStorage.getItem('data'));
    console.log(`LocalStorage: ${storedData}`);

    // %% [3. Canvas API]
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 50, 50);
    document.body.appendChild(canvas);
    console.log('Canvas: Blue rectangle drawn');

    // %% [4. Geolocation API]
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => console.log(`Geolocation: Lat ${pos.coords.latitude}, Lon ${pos.coords.longitude}`),
            err => console.log(`Geolocation Error: ${err.message}`)
        );
    } else {
        console.log('Geolocation: Not supported');
    }

    // %% [5. Practical Application]
    // Store synthetic data for AI/ML-like task
    const dataset = [{ id: 1, value: 10 }, { id: 2, value: 20 }];
    localStorage.setItem('dataset', JSON.stringify(dataset));
    const retrieved = JSON.parse(localStorage.getItem('dataset'));
    console.log(`Stored Dataset: ${JSON.stringify(retrieved)}`);

    // %% [6. Interview Scenario: Browser APIs]
    /*
    Interview Scenario: Browser APIs
    Q: How does LocalStorage differ from SessionStorage?
    A: LocalStorage persists until cleared; SessionStorage clears when the tab closes.
    Key: Use LocalStorage for persistent data, SessionStorage for temporary data.
    Example: localStorage.setItem('key', 'value');
    */
}

// Execute the demo
runBrowserAPIsDemo();