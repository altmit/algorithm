function solution(n) {
    var sqrt =  Math.sqrt(n);
    var answer = sqrt%1? -1 :(sqrt+1) ** 2;
    return answer;
}