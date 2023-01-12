function solution(arr) {
    var answer = arr.reduce(function(a,b){
        return a + b;
    });
    return answer/arr.length;
}