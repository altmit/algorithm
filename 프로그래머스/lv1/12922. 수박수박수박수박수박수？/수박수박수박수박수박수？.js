function solution(n) {
    var answer = n%2 ? '수박'.repeat(n/2)+'수' : '수박'.repeat(n/2);
    
    return answer;
}