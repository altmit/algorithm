function solution(sizes) {
    var answer = 0;
    sizes.map((x,i) => x[0] > x[1] ? sizes[i]=[x[0],x[1]] : sizes[i]=[x[1],x[0]]);
    answer = Math.max(...sizes.map((x)=>x[0])) * Math.max(...sizes.map((x)=>x[1]));    
    return answer;   
}