const sumAll = function(numA, numB) {
    if (!Number.isInteger(numA) || !Number.isInteger(numB) || numA < 0 || numB < 0) {
        return "ERROR";
    }
    sumNumbers = 0;
    const min = Math.min(numA, numB);
    const max = Math.max(numA, numB);
    for (let i = min; i <= max; i++) {
        sumNumbers += i;
    }
    return sumNumbers;

};

// Do not edit below this line
module.exports = sumAll;
