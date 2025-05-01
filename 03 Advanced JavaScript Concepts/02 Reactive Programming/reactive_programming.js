// %% [1. Introduction to Reactive Programming]
// Learn reactive programming with RxJS for event streams.

// Note: RxJS included via CDN in HTML
function runReactiveProgrammingDemo() {
    // %% [2. Observables]
    const { fromEvent } = rxjs;
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    document.body.appendChild(button);
    const clickStream = fromEvent(button, 'click');
    clickStream.subscribe(() => console.log('Observable: Button clicked'));

    // %% [3. Event Streams]
    const { map } = rxjs.operators;
    clickStream.pipe(map(() => new Date())).subscribe(time => console.log(`Event Stream: Clicked at ${time}`));

    // %% [4. Practical Application]
    // Stream synthetic data for AI/ML-like task
    const { interval } = rxjs;
    const dataStream = interval(1000).pipe(map(i => ({ id: i, value: Math.random() })));
    dataStream.subscribe(data => console.log(`Data Stream: ID ${data.id}, Value ${data.value}`));

    // %% [5. Interview Scenario: Reactive Programming]
    /*
    Interview Scenario: Reactive Programming
    Q: What is an Observable in RxJS?
    A: An Observable is a stream of data that can be subscribed to for async events.
    Key: Use for handling async data like user inputs or API responses.
    Example: rxjs.fromEvent(button, 'click').subscribe(() => console.log('Clicked'));
    */
}

// Execute the demo
runReactiveProgrammingDemo();