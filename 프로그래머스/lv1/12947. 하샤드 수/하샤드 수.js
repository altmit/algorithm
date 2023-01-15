function solution(x) {
    var s = x.toString().split("").reduce((a, b) => Number(a)+Number(b));
    var answer = x%s === 0 ? true : false;
    
    return answer;
}