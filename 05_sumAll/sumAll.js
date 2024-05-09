const sumAll = function(bound1, bound2) {
    if((typeof(bound1) !== "number" || typeof(bound2) !== "number") || bound1 < 0 || bound2 < 0) {
        return "ERROR";
    }
    const summingFactor = bound1 + bound2;
    const larger = Math.max(bound1, bound2);
    const smaller = Math.min(bound1, bound2);
    const multiplyFactor = Math.floor((larger - smaller + 1) / 2);
    const middleNum = ((larger - smaller + 1) % 2) * 
        (smaller + Math.floor((larger - smaller + 1) / 2))
    return summingFactor * multiplyFactor + middleNum;
};

// Do not edit below this line
module.exports = sumAll;
