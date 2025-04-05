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
