const palindromes = function (text) {
    //make lowercase, split by char, remove spaces, remove punctuation, test against reverse
    const tester = text
                     .toLowerCase()
                     .split("")
                     .filter((letter) => (letter !== " " && letter !== "!" && letter !== "?"
                     && letter !== "." && letter !== ","));
    let reverse = tester.slice();
    reverse.reverse();
    return tester.join("") === reverse.join("");
};

palindromes('ZZZZ car, a man, a maracaz.');

// Do not edit below this line
module.exports = palindromes;
