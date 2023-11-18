function solution(brown, yellow) {
    const length = brown + yellow;
    const answer = [];
    
    for(let h = 3; h<=length ; h++) {
        const w = length / h;
        
        if((w-2) * (h-2) === yellow) {
            answer.push(w);
            answer.push(h);
            break;
        }
    }
    
    return answer
}
