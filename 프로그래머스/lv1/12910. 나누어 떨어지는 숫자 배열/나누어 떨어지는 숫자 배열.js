function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter((a,index) => arr[index]%divisor === 0)
    answer.length === 0 ? answer.push(-1) : answer.sort((a,b) => a-b)
    
    return answer;
    
}