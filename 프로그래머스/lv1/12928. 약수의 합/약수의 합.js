function solution(n) {
    var answer = 0;
    for(i=1;i<=n;i++){
        n%i? answer : answer+=i
        
    }
    return answer;
}