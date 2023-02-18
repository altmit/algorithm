function solution(n, arr1, arr2) {
    var answer = [];
    for(var i=0; i<n; i++) {
        answer[i] = (arr1[i] | arr2[i]).toString(2).padStart(n,0);
        answer[i] = answer[i].split("").map((x) => x === '1'? "#" : " ").join("");
    }



    return answer;
}