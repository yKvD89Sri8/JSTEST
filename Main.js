function Main(input) {
    input = input.split("\n");
    for (var i = 0; i < input.length; i++) {
        input[i] = parseInt(input[i], 10);
    }
    input.sort(descendingOrder);
    const result = [];
    for (i = 0; i < 3 && i < input.length; i++) {
        result.push(input[i]);
        console.log(input[i]);
    }
    return result; // 返回值供测试使用
}

function descendingOrder(val1, val2) {
    return val2 - val1;
}

module.exports = { Main };