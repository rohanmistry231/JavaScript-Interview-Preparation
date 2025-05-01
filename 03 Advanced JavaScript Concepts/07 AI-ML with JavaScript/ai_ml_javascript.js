// %% [1. Introduction to AI/ML with JavaScript]
// Learn AI/ML with TensorFlow.js.

// Note: TensorFlow.js included via CDN in HTML
async function runAIMLDemo() {
    // %% [2. TensorFlow.js Tensors]
    const tf = window.tf;
    const tensor = tf.tensor([1, 2, 3]);
    console.log(`Tensor: ${tensor.toString()}`);

    // %% [3. Practical Application]
    // Train a simple model on synthetic data
    const xs = tf.tensor2d([[1], [2], [3]]);
    const ys = tf.tensor2d([[2], [4], [6]]);
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });
    await model.fit(xs, ys, { epochs: 10 });
    const prediction = model.predict(tf.tensor2d([[4]]));
    console.log(`Prediction: ${prediction.dataSync()[0]}`);

    // %% [4. Interview Scenario: AI/ML with JavaScript]
    /*
    Interview Scenario: AI/ML with JavaScript
    Q: How does TensorFlow.js enable ML in the browser?
    A: TensorFlow.js uses WebGL for GPU acceleration and runs models client-side.
    Key: Ideal for real-time inference without server dependency.
    Example: const model = tf.sequential(); model.add(tf.layers.dense(...));
    */
}

// Execute the demo
runAIMLDemo();