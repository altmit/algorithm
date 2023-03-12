function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => a-b)
    while(score.length >= m) {
        const box = score.splice(score.length-m,score.length);
        answer += Math.min(...box)*m;
    }
    return answer;
}