/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        "[" : "]",
        "(" : ")",
        "{" : "}"
    }
    let stack = [];
    s= s.split("");
    while(s.length > 0) {
        let bracket = s.shift();
        if(stack.length === 0) {
    
            stack.push(bracket);
            continue;
        }
        if(bracket in obj) {
            stack.push(bracket);
            continue ;
        }
        if(obj[stack[stack.length-1]] === bracket) {
            console.log(3);
            stack.pop();
            continue ;
        }
        
        return false;
    }
    return stack.length === 0 ? true : false
};