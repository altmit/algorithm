function solution(d, budget) {
    var sum = 0;
    var count = 0;
    d = d.sort((a,b) => a-b);
    
    d.forEach((a,i) =>  {
        sum = sum+a;
        if(sum <= budget) {
            count++;
            console.log(sum + " : " + a);
        }
    });
    
    return count;
}