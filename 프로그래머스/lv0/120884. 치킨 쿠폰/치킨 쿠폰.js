function solution(chicken) {
    let length =0
    while(chicken >= 10) {
        length +=  Math.floor(chicken/10);
        chicken = Math.floor(chicken/10) + chicken%10;
    }
    return length
}