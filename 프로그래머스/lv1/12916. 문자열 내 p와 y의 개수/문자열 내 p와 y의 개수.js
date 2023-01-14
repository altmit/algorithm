function solution(s){
    var answer = s.toLowerCase().split('y').length === s.toLowerCase().split('p').length ? true : false

    return answer;
}