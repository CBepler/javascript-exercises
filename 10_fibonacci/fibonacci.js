const fibonacci = function(size) {
    +size;
    if(size == 0){return 0;}
    else if(size < 0){return "OOPS";}
    let fib = [1, 1];
    let index = 2;
    while(fib.length < size){
        fib.push(fib[index - 1] + fib[index - 2]);
        index++;
    }
    return fib.pop();
};

// Do not edit below this line
module.exports = fibonacci;
