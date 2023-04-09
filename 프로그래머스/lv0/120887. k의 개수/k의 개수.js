function solution(i, j, k) {
    var answer = [...Array(j-i+1).fill(0).map((e,index) => { return  i+index }).join("")].filter((e) =>  e ==k )
    return answer.length;
}