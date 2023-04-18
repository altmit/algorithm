function solution(score) {
    var answer = [];
    var sumArr =  score.map((e) => e[0]+e[1])
    var sortedArr = score.map((e) => e[0]+e[1]).sort((a,b) => b-a)
    
    return sumArr.map((e)=> sortedArr.indexOf(e)+1);
}