/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let check = x < 0 ? -1 : 1;
    let result = Math.abs(x).toString().split("").reverse().join("") * check;

    return result >= Math.pow(2,31) || result <= Math.pow(-2,31) ? 0 : result
};