function solution(a, b) {
    var answer = 0;
    a.map((x,index) => answer += x*b[index]);
    return answer;
}