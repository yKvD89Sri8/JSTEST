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
