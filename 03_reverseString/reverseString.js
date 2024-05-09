const reverseString = function(phrase) {
    const phraseList = phrase.split("");
    let reverselist = [];
    for(let i = phraseList.length - 1; i >= 0; i--){
        reverselist.push(phraseList[i]);
    }
    return reverselist.join("");

    //return phrase.split("").reverse().join("");
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
