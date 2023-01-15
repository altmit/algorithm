function solution(n) {
    var answer = Number(n.toString().split("").sort().reverse().reduce((a,b) => a+b));
    return answer;
}