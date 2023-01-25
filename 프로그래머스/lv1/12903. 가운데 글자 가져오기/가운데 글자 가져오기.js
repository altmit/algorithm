function solution(s) {
    var answer = s.length%2 ? s.substring(s.length/2,s.length/2+1) : s.substring(s.length/2-1,s.length/2+1);
    
    return answer;
}