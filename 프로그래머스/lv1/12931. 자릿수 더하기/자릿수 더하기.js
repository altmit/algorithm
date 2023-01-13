function solution(n)
{
    var answer = n.toString().split("").map((x)=>parseInt(x)).reduce((a,b)=>a+b);
    return answer;
}