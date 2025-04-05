
# JavaScript 单元测试与代码覆盖率教程

本指南介绍如何使用 Jest 对 JavaScript 中的函数进行单元测试，并提供覆盖率报告。

---

## 🚀 快速开始

### 1. 安装 Jest

```bash
npm init -y
npm install --save-dev jest
```

修改 `package.json` 文件，添加测试脚本：

```json
"scripts": {
    "test": "jest",
    "coverage": "jest --coverage"
}
```

### 2. 修改待测函数 (`Main.js`)

为便于测试，需要将待测函数导出，示例如下：

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

// 导出函数以供单元测试
module.exports = { Main };
```

---

## 🧪 编写测试用例 (`Main.test.js`)

```js
const { Main } = require('./Main');

describe('Main function - Top 3 Hills', () => {
    let consoleOutput = [];
    const originalLog = console.log;

    // 每个测试前，重置 console.log，以便捕获输出
    beforeEach(() => {
        consoleOutput = [];
        console.log = (...args) => {
            consoleOutput.push(...args);
        };
    });

    // 每个测试后，恢复原 console.log
    afterEach(() => {
        console.log = originalLog;
    });

    // 测试用例1：Sample Input 1 (官方提供示例)
    test('Sample Input 1 (provided example)', () => {
        const input = `
1819
2003
876
2840
1723
1673
3776
2848
1592
922`;
        Main(input);
        expect(consoleOutput).toEqual([3776, 2848, 2840]);
    });

    // 测试用例2：Sample Input 2 (有重复值)
    test('Sample Input 2 (provided example with duplicates)', () => {
        const input = `
100
200
300
400
500
600
700
800
900
900`;
        Main(input);
        expect(consoleOutput).toEqual([900, 900, 800]);
    });

    // 测试用例3：所有山的高度相等
    test('All mountains equal height', () => {
        const input = `
1000
1000
1000
1000
1000
1000
1000
1000
1000
1000`;
        Main(input);
        expect(consoleOutput).toEqual([1000, 1000, 1000]);
    });

    // 测试用例4：输入为升序排列的数字
    test('Ascending order input', () => {
        const input = `
1
2
3
4
5
6
7
8
9
10`;
        Main(input);
        expect(consoleOutput).toEqual([10, 9, 8]);
    });

    // 测试用例5：输入为降序排列的数字
    test('Descending order input', () => {
        const input = `
10
9
8
7
6
5
4
3
2
1`;
        Main(input);
        expect(consoleOutput).toEqual([10, 9, 8]);
    });

    // 测试用例6：最小约束条件（高度为 0）
    test('Minimum constraint edge case (all zeros)', () => {
        const input = `
0
0
0
0
0
0
0
0
0
0`;
        Main(input);
        expect(consoleOutput).toEqual([0, 0, 0]);
    });

    // 测试用例7：最大约束条件（最大值 10,000）
    test('Maximum constraint edge case (maximum value 10,000)', () => {
        const input = `
10000
9999
8888
7777
6666
5555
4444
3333
2222
1111`;
        Main(input);
        expect(consoleOutput).toEqual([10000, 9999, 8888]);
    });
});
```

---

## 📊 运行测试与生成覆盖率报告

执行以下命令进行测试：

```bash
npm run coverage
```

完成后，你会看到类似以下的终端输出：

```
 PASS  ./Main.test.js

--------------|---------|----------|---------|---------|
File          | % Stmts | % Branch | % Funcs | % Lines |
--------------|---------|----------|---------|---------|
Main.js       |     100 |      100 |     100 |     100 |
--------------|---------|----------|---------|---------|
```

覆盖率报告（HTML）位于：
```
./coverage/lcov-report/index.html
```

你可以用浏览器打开，查看详细的覆盖率。

---

## 🎯 覆盖率指标说明

| 指标           | 含义                                |
| -------------- | ----------------------------------- |
| **% Stmts**    | 代码语句覆盖率（执行过的语句占比）  |
| **% Branch**   | 分支覆盖率（条件分支覆盖占比）      |
| **% Funcs**    | 函数调用覆盖率（被调用函数占比）    |
| **% Lines**    | 行覆盖率（执行到的代码行占比）      |

一般情况下，覆盖率越高意味着代码的测试越完善。

---

🎉 至此，你已经成功完成 JavaScript 函数的单元测试与覆盖率报告生成！
