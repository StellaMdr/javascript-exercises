const repeatString = function(str, num) {
    let repeatedStr = '';
    if (num < 0) {
        return 'ERROR';
    } else {
        for (i= num; i> 0; i--){
            repeatedStr += str;
        }
        return repeatedStr;
    }
};
// Do not edit below this line
module.exports = repeatString;
