const repeatString = function(string, num) {
    if(num < 0){return "ERROR";}
    let ans = "";
    for(let i = 0; i < num; i++){
        ans += string;
    }
    return ans;
    //return string.repeat(num);
};

// Do not edit below this line
module.exports = repeatString;
