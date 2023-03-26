function solution(k, score) {
    var answer = [];
    let arr = [];
    score.forEach((e) => {
        arr.push(e);
        arr.sort((a,b) => a-b);
        if(arr.length > k) {
            arr.shift();
        }

        answer.push(Math.min(...arr));
    })
    return answer;
}