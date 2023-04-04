function solution(num, k) {
    const inedx = String(num).split("").indexOf(String(k));
    
    return inedx !== -1 ? inedx+1 : inedx
}