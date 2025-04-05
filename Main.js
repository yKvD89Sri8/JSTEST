function Main(input) {
    input = input.split("\n");
    for(var i=0;i<input.length;i++){
        input[i]=parseInt(input[i], 10);
    }
    input.sort(descendingOrder);
    for(i=0;i<3;i++){
        console.log(input[i]);
    }
}
function ascendingOrder(val1,val2){
    return val1 - val2;
}
function descendingOrder(val1,val2){
    return val2 - val1;
}


module.exports = { Main };