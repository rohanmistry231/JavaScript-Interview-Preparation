# JavaScript Interview Questions for AI/ML Roles (Computer Vision)

This README provides 170 JavaScript interview questions tailored for AI/ML roles, focusing on computer vision applications. The questions emphasize **core JavaScript concepts** (e.g., arrays, objects, functions, closures, promises) and their use in AI/ML workflows, such as data preprocessing, model integration, and visualization. Questions are categorized by topic and divided into **Basic**, **Intermediate**, and **Advanced** levels to suit candidates preparing for roles requiring JavaScript in AI/ML.

## Arrays and Data Structures

### Basic
1. **What is an array in JavaScript, and how is it used to store image pixel data?**  
   Arrays store ordered data, like RGB pixel values for image processing.  
   ```javascript
   let pixel = [255, 128, 0]; // RGB values
   console.log(pixel[1]); // Access green channel: 128
   ```

2. **How do you create a 2D array to represent an image matrix?**  
   2D arrays store pixel intensities for grayscale images.  
   ```javascript
   let image = [
       [255, 128, 64],
       [0, 192, 255]
   ]; // 2x3 grayscale image
   ```

3. **What is the `length` property of an array, and how is it used in image processing?**  
   Returns the number of elements, useful for iterating over pixel arrays.  
   ```javascript
   let pixels = [255, 128, 0, 255, 255, 255];
   console.log(pixels.length); // 6 (two RGB pixels)
   ```

4. **How do you use `push` to add pixel data to an array?**  
   Appends new pixel values, e.g., for dynamic image data collection.  
   ```javascript
   let pixels = [];
   pixels.push(255, 128, 0); // Add RGB values
   ```

5. **Explain the `slice` method for extracting image regions.**  
   Extracts a portion of an array, useful for cropping image data.  
   ```javascript
   let pixels = [255, 128, 0, 100, 150, 200];
   let cropped = pixels.slice(0, 3); // [255, 128, 0]
   ```

6. **How do you iterate over an array of pixels using a `for` loop?**  
   Processes each pixel for tasks like normalization.  
   ```javascript
   let pixels = [255, 128, 0];
   for (let i = 0; i < pixels.length; i++) {
       pixels[i] /= 255; // Normalize to [0, 1]
   }
   ```

#### Intermediate
7. **Write a function to flatten a 2D image array for ML model input.**  
   Converts 2D pixel arrays to 1D for model compatibility.  
   ```javascript
   function flattenImage(image2D) {
       return image2D.flat();
   }
   let image = [[255, 128], [0, 64]];
   console.log(flattenImage(image)); // [255, 128, 0, 64]
   ```

8. **How do you use `map` to normalize pixel values in an array?**  
   Scales pixel values to [0, 1] for ML preprocessing.  
   ```javascript
   let pixels = [255, 128, 0];
   let normalized = pixels.map(val => val / 255);
   console.log(normalized); // [1, 0.5019607843137255, 0]
   ```

9. **Implement a function to transpose a 2D image array.**  
   Reorients image data, e.g., for rotation in computer vision.  
   ```javascript
   function transposeImage(matrix) {
       return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
   }
   let image = [[1, 2], [3, 4]];
   console.log(transposeImage(image)); // [[1, 3], [2, 4]]
   ```

10. **How do you use `reduce` to compute the average intensity of an image array?**  
    Calculates mean pixel value for image analysis.  
    ```javascript
    let pixels = [255, 128, 0];
    let average = pixels.reduce((sum, val) => sum + val, 0) / pixels.length;
    console.log(average); // 127.66666666666667
    ```

11. **Write a function to filter out low-intensity pixels from an image array.**  
    Removes pixels below a threshold for preprocessing.  
    ```javascript
    function filterLowIntensity(pixels, threshold) {
        return pixels.filter(val => val >= threshold);
    }
    let pixels = [50, 150, 255];
    console.log(filterLowIntensity(pixels, 100)); // [150, 255]
    ```

12. **How do you use `concat` to combine multiple image arrays?**  
    Merges pixel arrays, e.g., for stitching images.  
    ```javascript
    let image1 = [255, 128];
    let image2 = [0, 64];
    let combined = image1.concat(image2);
    console.log(combined); // [255, 128, 0, 64]
    ```

#### Advanced
13. **Write a function to convert an RGB array to grayscale.**  
    Converts RGB pixels to grayscale using luminance formula for vision tasks.  
    ```javascript
    function rgbToGrayscale(rgbArray) {
        let grayscale = [];
        for (let i = 0; i < rgbArray.length; i += 3) {
            let gray = 0.299 * rgbArray[i] + 0.587 * rgbArray[i + 1] + 0.114 * rgbArray[i + 2];
            grayscale.push(Math.round(gray));
        }
        return grayscale;
    }
    let rgb = [255, 128, 0, 100, 150, 200];
    console.log(rgbToGrayscale(rgb)); // [138, 149]
    ```

14. **Implement a function to apply a convolution kernel to an image array.**  
    Performs edge detection or blurring using a kernel.  
    ```javascript
    function applyConvolution(image, width, height, kernel) {
        let output = new Array(image.length).fill(0);
        let kSize = Math.sqrt(kernel.length);
        let kHalf = Math.floor(kSize / 2);
        for (let y = kHalf; y < height - kHalf; y++) {
            for (let x = kHalf; x < width - kHalf; x++) {
                let sum = 0;
                for (let ky = 0; ky < kSize; ky++) {
                    for (let kx = 0; kx < kSize; kx++) {
                        let px = x + kx - kHalf;
                        let py = y + ky - kHalf;
                        sum += image[py * width + px] * kernel[ky * kSize + kx];
                    }
                }
                output[y * width + x] = sum;
            }
        }
        return output;
    }
    let image = [255, 128, 64, 0];
    let kernel = [0, -1, 0, -1, 4, -1, 0, -1, 0]; // Edge detection
    console.log(applyConvolution(image, 2, 2, kernel));
    ```

15. **Write a function to implement k-means clustering for pixel segmentation.**  
    Groups pixels by intensity for simple image segmentation.  
    ```javascript
    function kMeansClustering(pixels, k, maxIter = 10) {
        let centers = pixels.slice(0, k).map(val => [val]);
        for (let iter = 0; iter < maxIter; iter++) {
            let clusters = Array(k).fill().map(() => []);
            pixels.forEach(pixel => {
                let distances = centers.map(c => Math.abs(c[0] - pixel));
                let minIndex = distances.indexOf(Math.min(...distances));
                clusters[minIndex].push(pixel);
            });
            centers = clusters.map(cluster => {
                if (cluster.length === 0) return centers[clusters.indexOf(cluster)];
                let sum = cluster.reduce((s, v) => s + v, 0);
                return [sum / cluster.length];
            });
        }
        return pixels.map(pixel => {
            let distances = centers.map(c => Math.abs(c[0] - pixel));
            return centers[distances.indexOf(Math.min(...distances))][0];
        });
    }
    let pixels = [255, 128, 0, 64];
    console.log(kMeansClustering(pixels, 2));
    ```

16. **How do you optimize array operations for large image datasets?**  
    Use typed arrays (e.g., `Uint8Array`) for memory efficiency in pixel processing.  
    ```javascript
    let pixels = new Uint8Array([255, 128, 0]);
    for (let i = 0; i < pixels.length; i++) {
        pixels[i] = Math.min(pixels[i] * 1.5, 255); // Brighten
    }
    console.log(pixels); // [255, 192, 0]
    ```

17. **Implement a function to compute the histogram of pixel intensities.**  
    Analyzes intensity distribution for image preprocessing.  
    ```javascript
    function computeHistogram(pixels, bins = 256) {
        let histogram = new Array(bins).fill(0);
        pixels.forEach(val => {
            histogram[Math.floor(val)]++;
        });
        return histogram;
    }
    let pixels = [255, 128, 0, 128];
    console.log(computeHistogram(pixels)); // [1, 0, ..., 2, ..., 1]
    ```

18. **Write a function to perform array-based image thresholding.**  
    Creates binary images for segmentation or feature extraction.  
    ```javascript
    function thresholdImage(pixels, threshold) {
        return pixels.map(val => val >= threshold ? 255 : 0);
    }
    let pixels = [100, 150, 200];
    console.log(thresholdImage(pixels, 128)); // [0, 255, 255]
    ```

## Objects and Data Handling

### Basic
19. **What is an object in JavaScript, and how is it used for image metadata?**  
   Objects store key-value pairs, e.g., image dimensions or labels.  
   ```javascript
   let imageMeta = { width: 640, height: 480, channels: 3 };
   console.log(imageMeta.width); // 640
   ```

20. **How do you add a property to an object for model configuration?**  
   Dynamically adds parameters, e.g., for ML model settings.  
   ```javascript
   let modelConfig = {};
   modelConfig.learningRate = 0.01;
   console.log(modelConfig); // { learningRate: 0.01 }
   ```

21. **Explain how to access nested object properties for dataset annotations.**  
   Nested objects store complex vision data, like bounding boxes.  
   ```javascript
   let annotation = { objects: [{ label: 'car', box: { x: 100, y: 200 } }] };
   console.log(annotation.objects[0].box.x); // 100
   ```

22. **How do you use `Object.keys` to iterate over model hyperparameters?**  
   Lists keys for processing configuration objects.  
   ```javascript
   let hyperParams = { lr: 0.01, epochs: 100, batchSize: 32 };
   Object.keys(hyperParams).forEach(key => console.log(key, hyperParams[key]));
   ```

23. **What is the difference between dot notation and bracket notation in objects?**  
   Dot notation is concise; bracket notation allows dynamic keys in vision pipelines.  
   ```javascript
   let imageData = { width: 640 };
   console.log(imageData.width); // Dot: 640
   console.log(imageData['width']); // Bracket: 640
   ```

24. **How do you clone an object to preserve original image metadata?**  
   Prevents unintended modifications using spread operator.  
   ```javascript
   let original = { width: 640, height: 480 };
   let copy = { ...original };
   copy.width = 800;
   console.log(original.width); // 640
   ```

#### Intermediate
25. **Write a function to merge multiple annotation objects for a dataset.**  
   Combines metadata for vision datasets.  
   ```javascript
   function mergeAnnotations(...annotations) {
       return Object.assign({}, ...annotations);
   }
   let ann1 = { label: 'car' };
   let ann2 = { confidence: 0.95 };
   console.log(mergeAnnotations(ann1, ann2)); // { label: 'car', confidence: 0.95 }
   ```

26. **How do you use destructuring to extract image properties?**  
   Simplifies access to object properties in vision workflows.  
   ```javascript
   let image = { width: 640, height: 480, channels: 3 };
   let { width, height } = image;
   console.log(width, height); // 640 480
   ```

27. **Implement a function to validate image metadata in an object.**  
   Ensures required properties for ML preprocessing.  
   ```javascript
   function validateImageMeta(meta) {
       const required = ['width', 'height', 'channels'];
       return required.every(key => key in meta && typeof meta[key] === 'number');
   }
   let meta = { width: 640, height: 480, channels: 3 };
   console.log(validateImageMeta(meta)); // true
   ```

28. **How do you use `Object.entries` to process bounding box data?**  
   Iterates over key-value pairs for visualization or analysis.  
   ```javascript
   let box = { x: 100, y: 200, width: 50, height: 50 };
   Object.entries(box).forEach(([key, value]) => console.log(`${key}: ${value}`));
   ```

29. **Write a function to convert an object to a query string for API calls.**  
   Formats vision data for ML model APIs.  
   ```javascript
   function toQueryString(params) {
       return Object.entries(params)
           .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
           .join('&');
   }
   let params = { model: 'yolo', imageId: 123 };
   console.log(toQueryString(params)); // model=yolo&imageId=123
   ```

30. **How do you freeze an object to prevent changes to model configurations?**  
   Ensures immutability for critical ML settings.  
   ```javascript
   let config = { epochs: 100 };
   Object.freeze(config);
   config.epochs = 200; // No effect
   console.log(config.epochs); // 100
   ```

#### Advanced
31. **Write a function to deeply clone a nested annotation object.**  
    Preserves complex vision data structures.  
    ```javascript
    function deepClone(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        let clone = Array.isArray(obj) ? [] : {};
        for (let key in obj) {
            clone[key] = deepClone(obj[key]);
        }
        return clone;
    }
    let annotation = { objects: [{ label: 'car', box: { x: 100 } }] };
    let copy = deepClone(annotation);
    copy.objects[0].box.x = 200;
    console.log(annotation.objects[0].box.x); // 100
    ```

32. **Implement a function to flatten a nested object for ML feature vectors.**  
    Converts nested vision data to a flat structure.  
    ```javascript
    function flattenObject(obj, prefix = '') {
        return Object.keys(obj).reduce((acc, key) => {
            let newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                Object.assign(acc, flattenObject(obj[key], newKey));
            } else {
                acc[newKey] = obj[key];
            }
            return acc;
        }, {});
    }
    let data = { box: { x: 100, y: 200 } };
    console.log(flattenObject(data)); // { 'box.x': 100, 'box.y': 200 }
    ```

33. **Write a function to compute the intersection of two bounding box objects.**  
    Calculates overlap for object detection evaluation.  
    ```javascript
    function boxIntersection(box1, box2) {
        let x1 = Math.max(box1.x, box2.x);
        let y1 = Math.max(box1.y, box2.y);
        let x2 = Math.min(box1.x + box1.width, box2.x + box2.width);
        let y2 = Math.min(box1.y + box1.height, box2.y + box2.height);
        if (x2 > x1 && y2 > y1) {
            return { x: x1, y: y1, width: x2 - x1, height: y2 - y1 };
        }
        return null;
    }
    let box1 = { x: 100, y: 100, width: 50, height: 50 };
    let box2 = { x: 120, y: 120, width: 50, height: 50 };
    console.log(boxIntersection(box1, box2)); // { x: 120, y: 120, width: 30, height: 30 }
    ```

34. **How do you use `WeakMap` to store temporary image processing data?**  
    Manages memory for large vision datasets without preventing garbage collection.  
    ```javascript
    let cache = new WeakMap();
    let imageData = { pixels: new Uint8Array(1000000) };
    cache.set(imageData, { processed: true });
    console.log(cache.get(imageData)); // { processed: true }
    ```

35. **Implement a function to serialize an object for ML model input.**  
    Converts vision data to JSON-compatible format.  
    ```javascript
    function serializeForModel(obj) {
        return JSON.stringify(obj, (key, value) => {
            if (Array.isArray(value) && value.every(v => typeof v === 'number')) {
                return value.join(',');
            }
            return value;
        });
    }
    let input = { pixels: [255, 128, 0] };
    console.log(serializeForModel(input)); // {"pixels":"255,128,0"}
    ```

36. **Write a function to compute IoU (Intersection over Union) for bounding boxes.**  
    Evaluates detection accuracy in computer vision.  
    ```javascript
    function computeIoU(box1, box2) {
        let intersection = boxIntersection(box1, box2);
        if (!intersection) return 0;
        let interArea = intersection.width * intersection.height;
        let unionArea = (box1.width * box1.height) + (box2.width * box2.height) - interArea;
        return interArea / unionArea;
    }
    let box1 = { x: 100, y: 100, width: 50, height: 50 };
    let box2 = { x: 120, y: 120, width: 50, height: 50 };
    console.log(computeIoU(box1, box2)); // ~0.36
    ```

## Functions and Scope

### Basic
37. **What is a function in JavaScript, and how is it used in image processing?**  
   Functions encapsulate logic, e.g., for pixel transformations.  
   ```javascript
   function brightenPixel(pixel) {
       return pixel * 1.5;
   }
   console.log(brightenPixel(100)); // 150
   ```

38. **How do you define an arrow function for pixel normalization?**  
   Arrow functions are concise for simple ML preprocessing tasks.  
   ```javascript
   const normalizePixel = pixel => pixel / 255;
   console.log(normalizePixel(255)); // 1
   ```

39. **What is function scope, and how does it affect image processing variables?**  
   Variables declared inside a function are local, preventing data leaks.  
   ```javascript
   function processImage(pixels) {
       let temp = pixels.map(v => v * 2);
       return temp;
   }
   let pixels = [100, 150];
   console.log(processImage(pixels)); // [200, 300]
   ```

40. **How do you use default parameters in a function for ML preprocessing?**  
   Provides fallback values for vision tasks.  
   ```javascript
   function scalePixel(pixel, factor = 1.5) {
       return pixel * factor;
   }
   console.log(scalePixel(100)); // 150
   ```

41. **Explain the difference between function declarations and expressions.**  
   Declarations are hoisted; expressions are not, affecting vision pipeline design.  
   ```javascript
   console.log(decl(100)); // Works
   function decl(pixel) { return pixel * 2; }
   // console.log(expr(100)); // Error
   const expr = pixel => pixel * 2;
   ```

42. **How do you pass an array to a function for image transformation?**  
   Processes pixel arrays for ML input preparation.  
   ```javascript
   function invertPixels(pixels) {
       return pixels.map(val => 255 - val);
   }
   let pixels = [255, 0];
   console.log(invertPixels(pixels)); // [0, 255]
   ```

#### Intermediate
43. **Write a higher-order function to chain image processing operations.**  
   Combines transformations like brighten and threshold for pipelines.  
   ```javascript
   function chainTransforms(...fns) {
       return pixel => fns.reduce((val, fn) => fn(val), pixel);
   }
   const brighten = x => x * 1.5;
   const cap = x => Math.min(x, 255);
   let transform = chainTransforms(brighten, cap);
   console.log(transform(200)); // 255
   ```

44. **How do you use closures to maintain image processing state?**  
   Closures track parameters, e.g., for adaptive thresholding.  
   ```javascript
   function createProcessor(factor) {
       return function(pixel) {
           return pixel * factor;
       };
   }
   let brighten = createProcessor(1.2);
   console.log(brighten(100)); // 120
   ```

45. **Implement a function to apply a filter to an image array using a callback.**  
    Allows flexible pixel processing for vision tasks.  
    ```javascript
    function applyFilter(pixels, filterFn) {
        return pixels.map(filterFn);
    }
    let pixels = [100, 150, 200];
    let thresholded = applyFilter(pixels, val => val > 128 ? 255 : 0);
    console.log(thresholded); // [0, 255, 255]
    ```

46. **How do you use rest parameters to handle variable image channels?**  
    Processes dynamic numbers of channels (e.g., RGB, RGBA).  
    ```javascript
    function processChannels(...channels) {
        return channels.map(val => val / 255);
    }
    console.log(processChannels(255, 128, 0)); // [1, 0.5019607843137255, 0]
    ```

47. **Write a function to memoize expensive pixel computations.**  
    Caches results for repeated vision calculations.  
    ```javascript
    function memoizeFilter(filterFn) {
        const cache = new Map();
        return function(pixel) {
            if (cache.has(pixel)) return cache.get(pixel);
            const result = filterFn(pixel);
            cache.set(pixel, result);
            return result;
        };
    }
    const complexFilter = memoizeFilter(x => Math.sqrt(x) * 10);
    console.log(complexFilter(100)); // ~31.62
    ```

48. **How do you use `this` in a function for canvas-based vision tasks?**  
    Refers to the context, e.g., a canvas object for rendering.  
    ```javascript
    const canvas = { width: 640, draw: function() { console.log(this.width); } };
    canvas.draw(); // 640
    ```

#### Advanced
49. **Implement a curried function for image transformation pipelines.**  
    Enables reusable, modular vision processing.  
    ```javascript
    function curryTransform(fn) {
        return function curried(...args) {
            if (args.length >= fn.length) {
                return fn(...args);
            }
            return (...moreArgs) => curried(...args, ...moreArgs);
        };
    }
    const scalePixel = curryTransform((factor, pixel) => pixel * factor);
    const scaleBy2 = scalePixel(2);
    console.log(scaleBy2(100)); // 200
    ```

50. **Write a function to implement a recursive image pyramid generator.**  
    Creates multi-scale representations for vision algorithms.  
    ```javascript
    function generatePyramid(pixels, width, height, levels) {
        if (levels <= 0) return [];
        let pyramid = [pixels];
        let current = pixels;
        let currWidth = width;
        let currHeight = height;
        for (let i = 1; i < levels; i++) {
            let next = [];
            for (let y = 0; y < currHeight; y += 2) {
                for (let x = 0; x < currWidth; x += 2) {
                    let idx = y * currWidth + x;
                    next.push(current[idx]);
                }
            }
            pyramid.push(next);
            current = next;
            currWidth = Math.floor(currWidth / 2);
            currHeight = Math.floor(currHeight / 2);
        }
        return pyramid;
    }
    let image = [255, 128, 64, 0];
    console.log(generatePyramid(image, 2, 2, 2)); // [[255, 128, 64, 0], [255]]
    ```

51. **How do you use function composition for vision preprocessing?**  
    Combines functions to streamline ML input preparation.  
    ```javascript
    function compose(...fns) {
        return x => fns.reduceRight((val, fn) => fn(val), x);
    }
    const normalize = x => x / 255;
    const threshold = x => x > 0.5 ? 1 : 0;
    let preprocess = compose(threshold, normalize);
    console.log(preprocess(128)); // 1
    ```

52. **Implement a generator function for streaming pixel data.**  
    Processes large images incrementally for memory efficiency.  
    ```javascript
    function* pixelGenerator(pixels, chunkSize) {
        for (let i = 0; i < pixels.length; i += chunkSize) {
            yield pixels.slice(i, i + chunkSize);
        }
    }
    let pixels = [255, 128, 0, 64];
    for (let chunk of pixelGenerator(pixels, 2)) {
        console.log(chunk); // [255, 128], [0, 64]
    }
    ```

53. **Write a function to implement dynamic scoping for vision parameters.**  
    Simulates dynamic scoping for flexible ML configurations.  
    ```javascript
    function withConfig(config, fn) {
        let oldConfig = globalThis.config;
        globalThis.config = config;
        let result = fn();
        globalThis.config = oldConfig;
        return result;
    }
    function getThreshold() {
        return globalThis.config.threshold;
    }
    let result = withConfig({ threshold: 128 }, () => getThreshold());
    console.log(result); // 128
    ```

54. **How do you handle function overloading for different image formats?**  
    Uses arguments length or type to process various data formats.  
    ```javascript
    function processImage(...args) {
        if (args.length === 1 && Array.isArray(args[0])) {
            return args[0].map(v => v / 255); // 1D array
        } else if (args.length === 3) {
            let [r, g, b] = args;
            return [r / 255, g / 255, b / 255]; // RGB tuple
        }
    }
    console.log(processImage([255, 128, 0])); // [1, 0.5019607843137255, 0]
    console.log(processImage(255, 128, 0)); // [1, 0.5019607843137255, 0]
    ```

## Closures and Context

### Basic
55. **What is a closure, and how is it used in vision pipelines?**  
   Closures maintain state, e.g., for tracking processing parameters.  
   ```javascript
   function createScaler(factor) {
       return pixel => pixel * factor;
   }
   let scale = createScaler(1.5);
   console.log(scale(100)); // 150
   ```

56. **How do you use closures to encapsulate image transformation logic?**  
   Protects transformation parameters for reuse.  
   ```javascript
   function createTransformer(type) {
       return pixel => type === 'brighten' ? pixel * 1.5 : pixel / 255;
   }
   let brighten = createTransformer('brighten');
   console.log(brighten(100)); // 150
   ```

57. **Explain lexical scope in the context of ML preprocessing functions.**  
   Variables are resolved in their defined scope, ensuring data integrity.  
   ```javascript
   function preprocess() {
       let factor = 1.5;
       function transform(pixel) {
           return pixel * factor;
       }
       return transform(100);
   }
   console.log(preprocess()); // 150
   ```

58. **How do you use closures to track image processing history?**  
   Maintains a log of applied transformations.  
   ```javascript
   function createProcessor() {
       let history = [];
       return pixel => {
           let result = pixel * 1.5;
           history.push(result);
           return result;
       };
   }
   let processor = createProcessor();
   console.log(processor(100)); // 150
   ```

59. **What is the difference between `var`, `let`, and `const` in closures?**  
   `let` and `const` provide block scope, critical for vision data isolation.  
   ```javascript
   function createCounter() {
       let count = 0;
       return () => count++;
   }
   let counter = createCounter();
   console.log(counter()); // 0
   console.log(counter()); // 1
   ```

60. **How do you use closures to create a reusable ML model wrapper?**  
   Encapsulates model parameters for repeated inference.  
   ```javascript
   function createModelWrapper(params) {
       return input => input * params.weight;
   }
   let model = createModelWrapper({ weight: 2 });
   console.log(model(100)); // 200
   ```

#### Intermediate
61. **Write a closure-based function to apply adaptive thresholding.**  
    Adjusts threshold dynamically based on image data.  
    ```javascript
    function createAdaptiveThreshold() {
        let sum = 0, count = 0;
        return pixel => {
            sum += pixel;
            count++;
            let threshold = sum / count;
            return pixel > threshold ? 255 : 0;
        };
    }
    let thresholder = createAdaptiveThreshold();
    console.log(thresholder(100)); // 255
    console.log(thresholder(50)); // 0
    ```

62. **How do you use closures to manage image batch processing?**  
    Tracks batch state for ML data pipelines.  
    ```javascript
    function createBatchProcessor(batchSize) {
        let batch = [];
        return pixel => {
            batch.push(pixel);
            if (batch.length >= batchSize) {
                let result = batch.map(v => v / 255);
                batch = [];
                return result;
            }
            return null;
        };
    }
    let processor = createBatchProcessor(2);
    console.log(processor(255)); // null
    console.log(processor(128)); // [1, 0.5019607843137255]
    ```

63. **Implement a closure to cache ML model predictions.**  
    Reduces redundant computations in vision tasks.  
    ```javascript
    function createPredictionCache(predictFn) {
        let cache = new Map();
        return input => {
            if (cache.has(input)) return cache.get(input);
            let result = predictFn(input);
            cache.set(input, result);
            return result;
        };
    }
    let predict = createPredictionCache(x => x * 2);
    console.log(predict(100)); // 200
    ```

64. **How do you use closures to implement a stateful image iterator?**  
    Iterates over pixels with saved position for streaming.  
    ```javascript
    function createPixelIterator(pixels) {
        let index = 0;
        return () => {
            if (index >= pixels.length) return null;
            return pixels[index++];
        };
    }
    let iterator = createPixelIterator([255, 128]);
    console.log(iterator()); // 255
    console.log(iterator()); // 128
    ```

65. **Write a closure-based function for real-time image processing.**  
    Maintains processing state for video frame analysis.  
    ```javascript
    function createFrameProcessor() {
        let prevFrame = null;
        return currentFrame => {
            if (!prevFrame) {
                prevFrame = currentFrame;
                return currentFrame;
            }
            let diff = currentFrame.map((val, i) => Math.abs(val - prevFrame[i]));
            prevFrame = currentFrame;
            return diff;
        };
    }
    let processor = createFrameProcessor();
    console.log(processor([100, 150])); // [100, 150]
    console.log(processor([120, 130])); // [20, 20]
    ```

66. **How do you avoid memory leaks in closures for large image datasets?**  
    Limit closure scope and clear references to free memory.  
    ```javascript
    function createTempProcessor() {
        let temp = [];
        return {
            process: pixel => temp.push(pixel),
            clear: () => temp = []
        };
    }
    let processor = createTempProcessor();
    processor.process(255);
    processor.clear();
    ```

#### Advanced
67. **Implement a closure-based pipeline for multi-stage vision processing.**  
    Chains transformations with persistent state.  
    ```javascript
    function createVisionPipeline() {
        let stages = [];
        return {
            addStage: fn => stages.push(fn),
            process: pixel => stages.reduce((val, fn) => fn(val), pixel)
        };
    }
    let pipeline = createVisionPipeline();
    pipeline.addStage(x => x * 1.5);
    pipeline.addStage(x => Math.min(x, 255));
    console.log(pipeline.process(200)); // 255
    ```

68. **Write a closure to simulate a neural network layer in JavaScript.**  
    Encapsulates weights and activation for ML simulation.  
    ```javascript
    function createLayer(weights, bias) {
        return input => {
            let sum = input.reduce((acc, val, i) => acc + val * weights[i], bias);
            return Math.max(0, sum); // ReLU activation
        };
    }
    let layer = createLayer([0.5, 0.3], 1);
    console.log(layer([2, 3])); // 2.9
    ```

69. **How do you use closures to implement a feature detector state machine?**  
    Tracks state for edge or corner detection in vision.  
    ```javascript
    function createFeatureDetector() {
        let state = { prev: null, threshold: 50 };
        return pixel => {
            if (!state.prev) {
                state.prev = pixel;
                return 0;
            }
            let diff = Math.abs(pixel - state.prev);
            state.prev = pixel;
            return diff > state.threshold ? 1 : 0;
        };
    }
    let detector = createFeatureDetector();
    console.log(detector(100)); // 0
    console.log(detector(200)); // 1
    ```

70. **Implement a closure for dynamic learning rate scheduling in ML.**  
    Adjusts learning rate based on iteration for training.  
    ```javascript
    function createScheduler(initialRate) {
        let rate = initialRate;
        let iteration = 0;
        return () => {
            rate = initialRate / (1 + 0.1 * iteration++);
            return rate;
        };
    }
    let scheduler = createScheduler(0.1);
    console.log(scheduler()); // 0.1
    console.log(scheduler()); // ~0.0909
    ```

71. **Write a closure to manage asynchronous image processing tasks.**  
    Coordinates tasks like loading and preprocessing images.  
    ```javascript
    function createTaskManager() {
        let tasks = [];
        return {
            addTask: task => tasks.push(task),
            run: async () => {
                for (let task of tasks) {
                    await task();
                }
            }
        };
    }
    let manager = createTaskManager();
    manager.addTask(async () => console.log('Processing image'));
    manager.run();
    ```

72. **How do you use closures to implement a reusable data augmentation function?**  
    Applies random transformations for ML training data.  
    ```javascript
    function createAugmenter() {
        let transforms = [(x => x * (0.8 + Math.random() * 0.4))];
        return pixel => transforms.reduce((val, fn) => fn(val), pixel);
    }
    let augmenter = createAugmenter();
    console.log(augmenter(100)); // Random value ~80-120
    ```

## Asynchronous JavaScript

### Basic
73. **What is a Promise, and how is it used for image loading in vision tasks?**  
   Handles asynchronous operations, e.g., fetching image data.  
   ```javascript
   function loadImageData(url) {
       return new Promise(resolve => {
           let img = new Image();
           img.src = url;
           img.onload = () => resolve(img);
       });
   }
   loadImageData('image.jpg').then(img => console.log(img.width));
   ```

74. **How do you use `setTimeout` for delayed image processing?**  
   Simulates processing delays in vision pipelines.  
   ```javascript
   function processPixel(pixel, callback) {
       setTimeout(() => callback(pixel * 1.5), 1000);
   }
   processPixel(100, result => console.log(result)); // 150 (after 1s)
   ```

75. **What is the event loop, and why is it important for real-time vision?**  
   Manages asynchronous tasks, ensuring smooth video processing.  
   ```javascript
   console.log('Start');
   setTimeout(() => console.log('Processing'), 0);
   console.log('End');
   // Output: Start, End, Processing
   ```

76. **How do you handle errors in asynchronous image processing?**  
   Uses try-catch or Promise rejection for robust vision workflows.  
   ```javascript
   function fetchImage(url) {
       return new Promise((resolve, reject) => {
           let img = new Image();
           img.src = url;
           img.onload = () => resolve(img);
           img.onerror = () => reject('Image load failed');
       });
   }
   fetchImage('invalid.jpg').catch(err => console.log(err));
   ```

77. **Explain the difference between `setTimeout` and `setInterval` for vision tasks.**  
   `setTimeout` runs once; `setInterval` repeats, e.g., for video frame processing.  
   ```javascript
   let frame = 100;
   let interval = setInterval(() => {
       console.log(frame * 1.5);
       if (frame++ > 102) clearInterval(interval);
   }, 1000);
   ```

78. **How do you use callbacks for asynchronous ML model inference?**  
   Handles model predictions in vision applications.  
   ```javascript
   function predict(input, callback) {
       setTimeout(() => callback(input * 2), 500); // Simulate model
   }
   predict(100, result => console.log(result)); // 200
   ```

#### Intermediate
79. **Write an async function to preprocess multiple images sequentially.**  
    Processes images for ML input preparation.  
    ```javascript
    async function preprocessImages(urls) {
        let results = [];
        for (let url of urls) {
            let img = await loadImageData(url);
            results.push(img.width); // Example processing
        }
        return results;
    }
    preprocessImages(['img1.jpg', 'img2.jpg']).then(results => console.log(results));
    ```

80. **How do you use `Promise.all` to process multiple images in parallel?**  
    Speeds up preprocessing for vision datasets.  
    ```javascript
    async function processInParallel(urls) {
        let promises = urls.map(url => loadImageData(url));
        let images = await Promise.all(promises);
        return images.map(img => img.width);
    }
    processInParallel(['img1.jpg', 'img2.jpg']).then(results => console.log(results));
    ```

81. **Implement a function to retry failed image fetches with exponential backoff.**  
    Ensures robust data loading for ML pipelines.  
    ```javascript
    async function fetchWithRetry(url, retries = 3, delay = 1000) {
        for (let i = 0; i < retries; i++) {
            try {
                return await loadImageData(url);
            } catch (err) {
                if (i === retries - 1) throw err;
                await new Promise(resolve => setTimeout(resolve, delay * 2 ** i));
            }
        }
    }
    fetchWithRetry('image.jpg').catch(err => console.log(err));
    ```

82. **How do you use async/await with error handling for model inference?**  
    Manages errors in vision model predictions.  
    ```javascript
    async function runInference(input) {
        try {
            let result = await new Promise(resolve => setTimeout(() => resolve(input * 2), 500));
            return result;
        } catch (err) {
            console.error('Inference failed:', err);
            return null;
        }
    }
    runInference(100).then(result => console.log(result)); // 200
    ```

83. **Write a function to throttle image processing tasks.**  
    Limits processing rate for real-time vision applications.  
    ```javascript
    function throttle(fn, delay) {
        let last = 0;
        return (...args) => {
            let now = Date.now();
            if (now - last >= delay) {
                last = now;
                return fn(...args);
            }
        };
    }
    let process = throttle(pixel => pixel * 1.5, 1000);
    process(100); // Runs
    process(200); // Ignored if < 1s
    ```

84. **How do you use `async` iterators for streaming image data?**  
    Processes large vision datasets incrementally.  
    ```javascript
    async function* streamPixels(pixels) {
        for (let pixel of pixels) {
            await new Promise(resolve => setTimeout(resolve, 100));
            yield pixel / 255;
        }
    }
    (async () => {
        for await (let pixel of streamPixels([255, 128])) {
            console.log(pixel); // 1, 0.5019607843137255
        }
    })();
    ```

#### Advanced
85. **Implement a function to create a promise-based image processing pipeline.**  
    Chains asynchronous vision tasks for ML preprocessing.  
    ```javascript
    async function createPipeline(...stages) {
        return async input => {
            let result = input;
            for (let stage of stages) {
                result = await stage(result);
            }
            return result;
        };
    }
    let pipeline = createPipeline(
        x => Promise.resolve(x.map(v => v * 1.5)),
        x => Promise.resolve(x.map(v => Math.min(v, 255)))
    );
    pipeline([200]).then(result => console.log(result)); // [255]
    ```

86. **Write a function to handle concurrent ML model predictions with limits.**  
    Controls concurrency for vision inference tasks.  
    ```javascript
    async function concurrentPredict(inputs, predictFn, maxConcurrent) {
        let results = [];
        for (let i = 0; i < inputs.length; i += maxConcurrent) {
            let batch = inputs.slice(i, i + maxConcurrent);
            let promises = batch.map(input => predictFn(input));
            results.push(...await Promise.all(promises));
        }
        return results;
    }
    let predict = x => Promise.resolve(x * 2);
    concurrentPredict([100, 200, 300], predict, 2).then(results => console.log(results)); // [200, 400, 600]
    ```

87. **How do you implement a cancellable image processing task?**  
    Allows stopping long-running vision tasks.  
    ```javascript
    function cancellableProcess(pixels) {
        let cancelled = false;
        return {
            process: async () => {
                let result = [];
                for (let pixel of pixels) {
                    if (cancelled) throw new Error('Cancelled');
                    await new Promise(resolve => setTimeout(resolve, 100));
                    result.push(pixel / 255);
                }
                return result;
            },
            cancel: () => cancelled = true
        };
    }
    let task = cancellableProcess([255, 128]);
    task.process().catch(err => console.log(err));
    task.cancel();
    ```

88. **Write a function to implement a timeout for ML model inference.**  
    Prevents hanging in vision pipelines.  
    ```javascript
    async function withTimeout(fn, timeout) {
        let timer = new Promise((_, reject) => 
            setTimeout(() => reject('Timed out'), timeout)
        );
        return Promise.race([fn(), timer]);
    }
    let predict = () => new Promise(resolve => setTimeout(() => resolve(200), 2000));
    withTimeout(predict, 1000).catch(err => console.log(err)); // Timed out
    ```

89. **Implement a function for asynchronous batch processing of image data.**  
    Processes vision data in batches for efficiency.  
    ```javascript
    async function batchProcess(pixels, batchSize, processFn) {
        let results = [];
        for (let i = 0; i < pixels.length; i += batchSize) {
            let batch = pixels.slice(i, i + batchSize);
            let processed = await Promise.all(batch.map(processFn));
            results.push(...processed);
        }
        return results;
    }
    let process = x => Promise.resolve(x / 255);
    batchProcess([255, 128], 1, process).then(results => console.log(results)); // [1, 0.5019607843137255]
    ```

90. **How do you use `Worker` for off-main-thread image processing?**  
    Runs heavy vision computations without blocking UI.  
    ```javascript
    const worker = new Worker(URL.createObjectURL(new Blob([`
        self.onmessage = e => {
            let pixels = e.data;
            let result = pixels.map(v => v / 255);
            self.postMessage(result);
        };
    `], { type: 'text/javascript' })));
    worker.postMessage([255, 128]);
    worker.onmessage = e => console.log(e.data); // [1, 0.5019607843137255]
    ```

## DOM and Canvas Manipulation

### Basic
91. **What is the Canvas API, and how is it used in computer vision?**  
   Renders and manipulates pixel data for image processing.  
   ```javascript
   let canvas = document.createElement('canvas');
   let ctx = canvas.getContext('2d');
   ctx.fillRect(0, 0, 100, 100); // Draw black square
   ```

92. **How do you draw an image on a canvas for ML preprocessing?**  
   Loads images for pixel extraction.  
   ```javascript
   let img = new Image();
   img.src = 'image.jpg';
   img.onload = () => {
       let canvas = document.createElement('canvas');
       canvas.width = img.width;
       canvas.height = img.height;
       canvas.getContext('2d').drawImage(img, 0, 0);
   };
   ```

93. **What is `getImageData`, and how is it used in vision tasks?**  
   Extracts raw pixel data for processing.  
   ```javascript
   let canvas = document.createElement('canvas');
   let ctx = canvas.getContext('2d');
   ctx.fillRect(0, 0, 2, 2);
   let imageData = ctx.getImageData(0, 0, 2, 2);
   console.log(imageData.data); // RGBA array
   ```

94. **How do you set canvas dimensions for image rendering?**  
   Matches canvas to image size for accurate processing.  
   ```javascript
   let canvas = document.createElement('canvas');
   canvas.width = 640;
   canvas.height = 480;
   console.log(canvas.width); // 640
   ```

95. **Explain how to clear a canvas for video frame updates.**  
   Resets canvas for new frames in real-time vision.  
   ```javascript
   let canvas = document.createElement('canvas');
   let ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ```

96. **How do you draw a bounding box on a canvas for object detection?**  
   Visualizes detected objects in vision applications.  
   ```javascript
   let canvas = document.createElement('canvas');
   let ctx = canvas.getContext('2d');
   ctx.strokeStyle = 'green';
   ctx.strokeRect(50, 50, 100, 100);
   ```

#### Intermediate
97. **Write a function to convert canvas pixels to grayscale.**  
    Processes pixel data for vision preprocessing.  
    ```javascript
    function grayscaleCanvas(canvas) {
        let ctx = canvas.getContext('2d');
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            let gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
            data[i] = data[i + 1] = data[i + 2] = gray;
        }
        ctx.putImageData(imageData, 0, 0);
        return canvas;
    }
    ```

98. **How do you resize an image on a canvas for ML model input?**  
    Scales images to fixed sizes.  
    ```javascript
    function resizeCanvas(canvas, newWidth, newHeight) {
        let tempCanvas = document.createElement('canvas');
        tempCanvas.width = newWidth;
        tempCanvas.height = newHeight;
        tempCanvas.getContext('2d').drawImage(canvas, 0, 0, newWidth, newHeight);
        return tempCanvas;
    }
    ```

99. **Implement a function to apply a brightness adjustment on a canvas.**  
    Modifies pixel intensities for vision preprocessing.  
    ```javascript
    function adjustBrightness(canvas, factor) {
        let ctx = canvas.getContext('2d');
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            data[i] = Math.min(data[i] * factor, 255);
            data[i + 1] = Math.min(data[i + 1] * factor, 255);
            data[i + 2] = Math.min(data[i + 2] * factor, 255);
        }
        ctx.putImageData(imageData, 0, 0);
    }
    ```

100. **How do you use canvas to visualize model confidence scores?**  
     Draws text annotations for vision outputs.  
     ```javascript
     function visualizeConfidence(canvas, score, x, y) {
         let ctx = canvas.getContext('2d');
         ctx.font = '16px Arial';
         ctx.fillStyle = 'red';
         ctx.fillText(`Confidence: ${score.toFixed(2)}`, x, y);
     }
     ```

101. **Write a function to crop an image on a canvas.**  
     Extracts a region for focused vision analysis.  
     ```javascript
     function cropCanvas(canvas, x, y, width, height) {
         let tempCanvas = document.createElement('canvas');
         tempCanvas.width = width;
         tempCanvas.height = height;
         tempCanvas.getContext('2d').drawImage(canvas, x, y, width, height, 0, 0, width, height);
         return tempCanvas;
     }
     ```

102. **How do you handle canvas pixel data for ML model input?**  
     Converts pixel data to a format suitable for models.  
     ```javascript
     function getPixelArray(canvas) {
         let ctx = canvas.getContext('2d');
         let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
         return Array.from(imageData.data);
     }
     ```

#### Advanced
103. **Write a function to implement edge detection on a canvas using Sobel operators.**  
     Detects edges for vision feature extraction.  
     ```javascript
     function sobelEdgeDetection(canvas) {
         let ctx = canvas.getContext('2d');
         let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
         let data = imageData.data;
         let width = canvas.width;
         let height = canvas.height;
         let output = new Uint8ClampedArray(data.length);
         for (let y = 1; y < height - 1; y++) {
             for (let x = 1; x < width - 1; x++) {
                 let i = (y * width + x) * 4;
                 let gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
                 let gx = (
                     -data[((y - 1) * width + x - 1) * 4] + data[((y - 1) * width + x + 1) * 4] +
                     -2 * data[(y * width + x - 1) * 4] + 2 * data[(y * width + x + 1) * 4] +
                     -data[((y + 1) * width + x - 1) * 4] + data[((y + 1) * width + x + 1) * 4]
                 );
                 let gy = (
                     -data[((y - 1) * width + x - 1) * 4] + -2 * data[((y - 1) * width + x) * 4] +
                     -data[((y - 1) * width + x + 1) * 4] + data[((y + 1) * width + x - 1) * 4] +
                     2 * data[((y + 1) * width + x) * 4] + data[((y + 1) * width + x + 1) * 4]
                 );
                 let mag = Math.sqrt(gx * gx + gy * gy);
                 output[i] = output[i + 1] = output[i + 2] = mag > 100 ? 255 : 0;
                 output[i + 3] = 255;
             }
         }
         ctx.putImageData(new ImageData(output, width, height), 0, 0);
     }
     ```

104. **Implement a function to animate object tracking on a canvas.**  
     Visualizes tracking in video streams.  
     ```javascript
     function animateTracking(canvas, boxes) {
         let ctx = canvas.getContext('2d');
         let index = 0;
         function drawFrame() {
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             ctx.strokeStyle = 'green';
             ctx.strokeRect(boxes[index].x, boxes[index].y, boxes[index].width, boxes[index].height);
             index = (index + 1) % boxes.length;
             requestAnimationFrame(drawFrame);
         }
         drawFrame();
     }
     ```

105. **Write a function to implement histogram equalization on a canvas.**  
     Enhances image contrast for vision preprocessing.  
     ```javascript
     function histogramEqualization(canvas) {
         let ctx = canvas.getContext('2d');
         let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
         let data = imageData.data;
         let histogram = new Array(256).fill(0);
         let cdf = new Array(256).fill(0);
         for (let i = 0; i < data.length; i += 4) {
             let gray = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
             histogram[gray]++;
         }
         cdf[0] = histogram[0];
         for (let i = 1; i < 256; i++) {
             cdf[i] = cdf[i - 1] + histogram[i];
         }
         let minCdf = cdf.find(v => v > 0);
         let totalPixels = data.length / 4;
         for (let i = 0; i < data.length; i += 4) {
             let gray = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
             let newValue = Math.round(((cdf[gray] - minCdf) / (totalPixels - minCdf)) * 255);
             data[i] = data[i + 1] = data[i + 2] = newValue;
         }
         ctx.putImageData(imageData, 0, 0);
     }
     ```

106. **How do you optimize canvas operations for large images?**  
     Use off-screen canvases and batch updates for performance.  
     ```javascript
     function processLargeImage(canvas, processFn) {
         let offscreen = document.createElement('canvas');
         offscreen.width = canvas.width;
         offscreen.height = canvas.height;
         let ctx = offscreen.getContext('2d');
         ctx.drawImage(canvas, 0, 0);
         let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
         processFn(imageData.data);
         ctx.putImageData(imageData, 0, 0);
         canvas.getContext('2d').drawImage(offscreen, 0, 0);
     }
     ```

107. **Implement a function to blend two images on a canvas.**  
     Combines images for vision data augmentation.  
     ```javascript
     function blendImages(canvas1, canvas2, alpha) {
         let canvas = document.createElement('canvas');
         canvas.width = canvas1.width;
         canvas.height = canvas1.height;
         let ctx = canvas.getContext('2d');
         ctx.drawImage(canvas1, 0, 0);
         ctx.globalAlpha = alpha;
         ctx.drawImage(canvas2, 0, 0);
         return canvas;
     }
     ```

108. **Write a function to implement a simple particle filter for tracking.**  
     Tracks objects using probabilistic canvas updates.  
     ```javascript
     function particleFilter(canvas, particles, target) {
         let ctx = canvas.getContext('2d');
         function update() {
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             particles.forEach(p => {
                 p.x += (Math.random() - 0.5) * 10;
                 p.y += (Math.random() - 0.5) * 10;
                 p.weight = Math.exp(-((p.x - target.x) ** 2 + (p.y - target.y) ** 2) / 100);
             });
             let totalWeight = particles.reduce((sum, p) => sum + p.weight, 0);
             particles.forEach(p => p.weight /= totalWeight);
             particles.forEach(p => {
                 ctx.beginPath();
                 ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
                 ctx.fillStyle = `rgba(255, 0, 0, ${p.weight})`;
                 ctx.fill();
             });
             requestAnimationFrame(update);
         }
         update();
     }
     ```

## Error Handling and Debugging

### Basic
109. **What is a try-catch block, and how is it used in vision processing?**  
     Handles errors in image data operations.  
     ```javascript
     function processPixel(pixel) {
         try {
             if (typeof pixel !== 'number') throw new Error('Invalid pixel');
             return pixel / 255;
         } catch (err) {
             console.error(err);
             return 0;
         }
     }
     console.log(processPixel('invalid')); // 0
     ```

110. **How do you validate image data before processing?**  
     Ensures data integrity for ML pipelines.  
     ```javascript
     function validateImage(pixels) {
         return pixels.every(val => typeof val === 'number' && val >= 0 && val <= 255);
     }
     console.log(validateImage([255, 128, 0])); // true
     ```

111. **What is `console.log`, and how is it used for debugging vision code?**  
     Logs data for inspecting pixel transformations.  
     ```javascript
     let pixels = [255, 128];
     console.log('Before:', pixels);
     pixels = pixels.map(v => v / 255);
     console.log('After:', pixels);
     ```

112. **How do you handle undefined values in image arrays?**  
     Provides defaults to prevent errors in vision tasks.  
     ```javascript
     function cleanImage(pixels) {
         return pixels.map(val => val ?? 0);
     }
     console.log(cleanImage([255, undefined, 128])); // [255, 0, 128]
     ```

113. **Explain the role of `throw` in custom error handling for ML.**  
     Signals invalid states in vision workflows.  
     ```javascript
     function checkModelInput(input) {
         if (!Array.isArray(input)) throw new Error('Input must be an array');
         return input;
     }
     ```

114. **How do you use `debugger` for vision algorithm debugging?**  
     Pauses execution to inspect image processing logic.  
     ```javascript
     function processImage(pixels) {
         debugger;
         return pixels.map(v => v / 255);
     }
     processImage([255, 128]);
     ```

#### Intermediate
115. **Write a function to handle array bounds errors in image processing.**  
     Prevents out-of-bounds access in pixel operations.  
     ```javascript
     function safeAccess(pixels, index) {
         try {
             if (index < 0 || index >= pixels.length) throw new Error('Index out of bounds');
             return pixels[index];
         } catch (err) {
             console.error(err);
             return 0;
         }
     }
     console.log(safeAccess([255, 128], 5)); // 0
     ```

116. **How do you log detailed error information for ML model failures?**  
     Captures context for debugging vision pipelines.  
     ```javascript
     function runModel(input) {
         try {
             if (!input.length) throw new Error('Empty input');
             return input.map(v => v * 2);
         } catch (err) {
             console.error('Model error:', { input, message: err.message, stack: err.stack });
             return null;
         }
     }
     runModel([]);
     ```

117. **Implement a function to retry ML preprocessing on failure.**  
     Ensures robustness in vision data preparation.  
     ```javascript
     function retryProcess(pixel, attempts = 3) {
         for (let i = 0; i < attempts; i++) {
             try {
                 if (Math.random() < 0.5) throw new Error('Processing failed');
                 return pixel / 255;
             } catch (err) {
                 if (i === attempts - 1) throw err;
             }
         }
     }
     try {
         console.log(retryProcess(255));
     } catch (err) {
         console.error(err);
     }
     ```

118. **How do you use assertions for validating vision data?**  
     Enforces invariants in ML workflows.  
     ```javascript
     function assertValidPixels(pixels) {
         if (!pixels.every(v => v >= 0 && v <= 255)) {
             throw new Error('Invalid pixel values');
         }
         return pixels;
     }
     try {
         assertValidPixels([255, 300]);
     } catch (err) {
         console.error(err);
     }
     ```

119. **Write a function to handle asynchronous errors in image loading.**  
     Manages fetch failures for vision datasets.  
     ```javascript
     async function loadImageSafe(url) {
         try {
             let img = await loadImageData(url);
             return img;
         } catch (err) {
             console.error('Load failed:', err);
             return null;
         }
     }
     loadImageSafe('invalid.jpg').then(img => console.log(img));
     ```

120. **How do you profile performance of image processing functions?**  
     Measures execution time for optimization.  
     ```javascript
     function profileProcess(pixels, fn) {
         console.time('process');
         let result = fn(pixels);
         console.timeEnd('process');
         return result;
     }
     profileProcess([255, 128], pixels => pixels.map(v => v / 255));
     ```

#### Advanced
121. **Implement a custom error class for vision processing errors.**  
     Provides specific error types for ML pipelines.  
     ```javascript
     class VisionError extends Error {
         constructor(message, details) {
             super(message);
             this.name = 'VisionError';
             this.details = details;
         }
     }
     function processImage(pixels) {
         if (!pixels.length) throw new VisionError('Empty image', { pixels });
         return pixels;
     }
     try {
         processImage([]);
     } catch (err) {
         console.error(err.name, err.message, err.details);
     }
     ```

122. **Write a function to log and recover from ML inference errors.**  
     Ensures pipeline continuity in vision tasks.  
     ```javascript
     function safeInference(input, predictFn) {
         try {
             return predictFn(input);
         } catch (err) {
             console.error('Inference failed:', err);
             return input.map(() => 0); // Fallback
         }
     }
     let predict = () => { throw new Error('Model error'); };
     console.log(safeInference([100], predict)); // [0]
     ```

123. **How do you implement a circuit breaker for ML API calls?**  
     Prevents repeated failures in vision data fetching.  
     ```javascript
     function createCircuitBreaker(maxFailures, resetTime) {
         let failures = 0;
         let open = false;
         return async fn => {
             if (open) throw new Error('Circuit open');
             try {
                 let result = await fn();
                 failures = 0;
                 return result;
             } catch (err) {
                 failures++;
                 if (failures >= maxFailures) {
                     open = true;
                     setTimeout(() => { open = false; failures = 0; }, resetTime);
                 }
                 throw err;
             }
         };
     }
     let breaker = createCircuitBreaker(3, 5000);
     let fetchData = breaker(() => Promise.reject('Failed'));
     fetchData().catch(err => console.log(err));
     ```

124. **Implement a function to validate and sanitize vision data inputs.**  
     Ensures safe ML processing.  
     ```javascript
     function sanitizeInput(data) {
         if (!Array.isArray(data)) throw new Error('Invalid input');
         return data.map(val => {
             if (typeof val !== 'number' || isNaN(val)) return 0;
             return Math.max(0, Math.min(255, val));
         });
     }
     console.log(sanitizeInput([255, 'invalid', -1])); // [255, 0, 0]
     ```

125. **Write a function to trace execution of vision algorithms.**  
     Logs detailed steps for debugging.  
     ```javascript
     function traceProcess(fn) {
         return (...args) => {
             console.log('Input:', args);
             let start = performance.now();
             let result = fn(...args);
             console.log('Output:', result, 'Time:', performance.now() - start, 'ms');
             return result;
         };
     }
     let normalize = traceProcess(pixels => pixels.map(v => v / 255));
     normalize([255, 128]);
     ```

126. **How do you handle memory leaks in large-scale vision processing?**  
     Monitors and clears large arrays or objects.  
     ```javascript
     function processLargeImage(pixels) {
         let temp = new Array(pixels.length).fill(0);
         try {
             return pixels.map((v, i) => {
                 temp[i] = v / 255;
                 return temp[i];
             });
         } finally {
             temp = null; // Allow GC
         }
     }
     processLargeImage(new Array(1000000).fill(255));
     ```

## Data Preprocessing for ML

### Basic
127. **How do you normalize image data for ML model input?**  
     Scales pixel values to [0, 1] for compatibility.  
     ```javascript
     function normalizePixels(pixels) {
         return pixels.map(val => val / 255);
     }
     console.log(normalizePixels([255, 128])); // [1, 0.5019607843137255]
     ```

128. **What is data augmentation, and how is it implemented in JavaScript?**  
     Generates varied training data, e.g., by flipping pixels.  
     ```javascript
     function flipPixels(pixels, width) {
         let flipped = [];
         for (let i = 0; i < pixels.length; i += width) {
             flipped.push(...pixels.slice(i, i + width).reverse());
         }
         return flipped;
     }
     console.log(flipPixels([1, 2, 3, 4], 2)); // [2, 1, 4, 3]
     ```

129. **How do you convert image data to a feature vector?**  
     Flattens and normalizes data for ML input.  
     ```javascript
     function toFeatureVector(pixels) {
         return pixels.flat().map(val => val / 255);
     }
     console.log(toFeatureVector([[255, 128], [0, 64]])); // [1, 0.5019607843137255, 0, 0.25098039215686274]
     ```

130. **Explain how to shuffle an image dataset for ML training.**  
     Randomizes data order to prevent bias.  
     ```javascript
     function shuffleArray(array) {
         for (let i = array.length - 1; i > 0; i--) {
             let j = Math.floor(Math.random() * (i + 1));
             [array[i], array[j]] = [array[j], array[i]];
         }
         return array;
     }
     console.log(shuffleArray([1, 2, 3, 4]));
     ```

131. **How do you split a dataset into training and testing sets?**  
     Divides vision data for model evaluation.  
     ```javascript
     function splitDataset(data, trainRatio = 0.8) {
         let trainSize = Math.floor(data.length * trainRatio);
         return {
             train: data.slice(0, trainSize),
             test: data.slice(trainSize)
         };
     }
     console.log(splitDataset([1, 2, 3, 4, 5])); // { train: [1, 2, 3, 4], test: [5] }
     ```

132. **What is one-hot encoding, and how is it used for vision labels?**  
     Converts categorical labels to vectors for ML.  
     ```javascript
     function oneHotEncode(label, numClasses) {
         let vector = new Array(numClasses).fill(0);
         vector[label] = 1;
         return vector;
     }
     console.log(oneHotEncode(1, 3)); // [0, 1, 0]
     ```

#### Intermediate
133. **Write a function to apply random noise to image data for augmentation.**  
     Adds noise to improve model robustness.  
     ```javascript
     function addNoise(pixels, noiseLevel = 0.1) {
         return pixels.map(val => {
             let noise = (Math.random() - 0.5) * noiseLevel * 255;
             return Math.max(0, Math.min(255, val + noise));
         });
     }
     console.log(addNoise([128, 128]));
     ```

134. **How do you implement batch generation for ML training?**  
     Yields batches of vision data for efficient training.  
     ```javascript
     function* batchGenerator(data, batchSize) {
         for (let i = 0; i < data.length; i += batchSize) {
             yield data.slice(i, i + batchSize);
         }
     }
     let data = [1, 2, 3, 4];
     for (let batch of batchGenerator(data, 2)) {
         console.log(batch); // [1, 2], [3, 4]
     }
     ```

135. **Implement a function to resize an image array without canvas.**  
     Simplifies image data for ML input.  
     ```javascript
     function resizeImage(pixels, oldWidth, oldHeight, newWidth, newHeight) {
         let resized = [];
         for (let y = 0; y < newHeight; y++) {
             for (let x = 0; x < newWidth; x++) {
                 let srcX = Math.floor(x * oldWidth / newWidth);
                 let srcY = Math.floor(y * oldHeight / newHeight);
                 resized.push(pixels[srcY * oldWidth + srcX]);
             }
         }
         return resized