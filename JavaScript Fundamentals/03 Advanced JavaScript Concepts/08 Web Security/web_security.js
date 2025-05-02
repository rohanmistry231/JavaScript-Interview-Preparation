// %% [1. Introduction to Web Security]
// Learn JavaScript web security practices.

function runWebSecurityDemo() {
    // %% [2. XSS Prevention]
    const userInput = '<script>alert("XSS")</script>';
    const safeInput = userInput.replace(/[<>]/g, '');
    const div = document.createElement('div');
    div.textContent = safeInput;
    document.body.appendChild(div);
    console.log('XSS Prevention: Sanitized input displayed');

    // %% [3. Practical Application]
    // Secure synthetic data display for AI/ML-like task
    const data = ['Safe', '<script>alert("XSS")</script>'];
    const ul = document.createElement('ul');
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.replace(/[<>]/g, '');
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
    console.log('Secure Data: Sanitized list rendered');

    // %% [4. Interview Scenario: Web Security]
    /*
    Interview Scenario: Web Security
    Q: How do you prevent XSS attacks in JavaScript?
    A: Sanitize user input and use textContent instead of innerHTML.
    Key: Avoid executing untrusted scripts in the DOM.
    Example: div.textContent = userInput.replace(/[<>]/g, '');
    */
}

// Execute the demo
runWebSecurityDemo();