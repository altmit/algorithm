function solution(s) {
    let answer = [0,0]
    while(s != 1){
        let zeroLength = s.length;
        let length = s.replaceAll('0','').length;
        s = length.toString(2);
        zeroLength = zeroLength - length;
        
        answer[0]++;
        answer[1] = answer[1] + zeroLength;
    }
   

    
    return answer;
}
