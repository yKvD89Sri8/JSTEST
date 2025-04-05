# JavaScript Unit Testing and Code Coverage Tutorial

This guide walks you through how to write unit tests for JavaScript functions using **Jest**, and how to generate code coverage reports.

---

## 🚀 Quick Start

### 1. Install Jest

```bash
npm init -y
npm install --save-dev jest
```

Update your `package.json` file to include test scripts:

```json
"scripts": {
    "test": "jest",
    "coverage": "jest --coverage"
}
```

### 2. Modify the Target Function (`Main.js`)

To make your function testable, export it as shown below:

```js
function Main(input) {
    input = input.split("\n");
    for (var i = 0; i < input.length; i++) {
        input[i] = parseInt(input[i], 10);
    }
    input.sort(descendingOrder);
    for (i = 0; i < 3; i++) {
        console.log(input[i]);
    }
}

function descendingOrder(val1, val2) {
    return val2 - val1;
}

// Export the function for unit testing
module.exports = { Main };
```

---

## 🧪 Writing Test Cases (`Main.test.js`)

```js
const { Main } = require('./Main');

describe('Main function - Top 3 Hills', () => {
    let consoleOutput = [];
    const originalLog = console.log;

    // Mock console.log before each test
    beforeEach(() => {
        consoleOutput = [];
        console.log = (...args) => {
            consoleOutput.push(...args);
        };
    });

    // Restore console.log after each test
    afterEach(() => {
        console.log = originalLog;
    });

    test('Provided example (Sample Input 1)', () => {
        const input = "1819\n2003\n876\n2840\n1723\n1673\n3776\n2848\n1592\n922";
        Main(input);
        expect(consoleOutput).toEqual([3776, 2848, 2840]);
    });

    test('Provided example with duplicates (Sample Input 2)', () => {
        const input = "100\n200\n300\n400\n500\n600\n700\n800\n900\n900";
        Main(input);
        expect(consoleOutput).toEqual([900, 900, 800]);
    });

    test('All mountains equal height', () => {
        const input = "1000\n1000\n1000\n1000\n1000\n1000\n1000\n1000\n1000\n1000";
        Main(input);
        expect(consoleOutput).toEqual([1000, 1000, 1000]);
    });

    test('Ascending order input', () => {
        const input = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10";
        Main(input);
        expect(consoleOutput).toEqual([10, 9, 8]);
    });

    test('Descending order input', () => {
        const input = "10\n9\n8\n7\n6\n5\n4\n3\n2\n1";
        Main(input);
        expect(consoleOutput).toEqual([10, 9, 8]);
    });

    test('Edge case: minimum heights (all zeros)', () => {
        const input = "0\n0\n0\n0\n0\n0\n0\n0\n0\n0";
        Main(input);
        expect(consoleOutput).toEqual([0, 0, 0]);
    });

    test('Edge case: maximum height values', () => {
        const input = "10000\n9999\n8888\n7777\n6666\n5555\n4444\n3333\n2222\n1111";
        Main(input);
        expect(consoleOutput).toEqual([10000, 9999, 8888]);
    });
});
```

---

## 📊 Run Tests and Generate Coverage Report

Run the following command to execute tests and generate a coverage report:

```bash
npm run coverage
```

After the tests run, you will see output similar to this in your terminal:

```
 PASS  ./Main.test.js

--------------|---------|----------|---------|---------|
File          | % Stmts | % Branch | % Funcs | % Lines |
--------------|---------|----------|---------|---------|
Main.js       |     100 |      100 |     100 |     100 |
--------------|---------|----------|---------|---------|
```

The HTML version of the coverage report is located at:

```
./coverage/lcov-report/index.html
```

Open it in your browser for a detailed view of test coverage.

---

## 🎯 Coverage Metrics Explained

| Metric         | Description                                      |
| -------------- | ------------------------------------------------ |
| **% Stmts**    | Percentage of statements executed                |
| **% Branch**   | Percentage of conditionals/branches covered      |
| **% Funcs**    | Percentage of functions invoked during tests     |
| **% Lines**    | Percentage of code lines executed                |

In general, the higher the coverage, the more thoroughly your code has been tested.

---

🎉 Congratulations! You’ve successfully set up unit testing and coverage reporting for your JavaScript functions!
