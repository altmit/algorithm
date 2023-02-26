function solution(a, b, n) {
    return count(a,b,n);
}

function count(a,b,n) {
    if(n < a) {
        return 0; 
    }
    var newN = Math.floor(n/a)*b+ n%a;
    return count(a,b,newN) + Math.floor(n/a)*b;
    
}

