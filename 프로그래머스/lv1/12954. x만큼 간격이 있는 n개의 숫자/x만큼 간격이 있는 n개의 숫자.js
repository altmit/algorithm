function solution(x, n) {
    var answer = new Array(n);
    Array.from((answer), (a,index) =>  answer[index] = x*(index+1));
    return answer;
}