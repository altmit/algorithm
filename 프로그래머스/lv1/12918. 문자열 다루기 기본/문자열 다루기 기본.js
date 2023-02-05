function solution(s) {
    var answer = true;
    if(s.length === 4 || s.length === 6) {
        var n = 0;
        var a = s.split("").map((x) => isNaN(x)? n+1: n+0 )
        
        return a.reduce((a,b)=>a+b) > 0 ? false : true
        
    }
    return false;
}