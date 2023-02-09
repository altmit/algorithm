function solution(n, m) {
    var answer = [];
    answer.push(gcd(n,m));
    answer.push(n*m/answer[0]);
    return answer;
}

function gcd(a,b) {
    if(b === 0) {
        return a;
    }
    return gcd(b,a%b);
}