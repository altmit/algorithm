/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = 0
    let newX = x;
    while(newX > 0) {
        y = y*10 + newX%10;
        newX = Math.floor(newX/10)

    }

    return y === x ? true : false;
};