function solution(absolutes, signs) {
    var answer = 0;
    absolutes.map((x,index) => signs[index] ? answer+=x : answer+=(-1*x))
    return answer;
}