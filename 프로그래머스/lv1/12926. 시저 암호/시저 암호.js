function solution(s, n) {
    var answer = s.split("");
    answer = answer.map((x) => 
        (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) 
        ? x.charCodeAt(0)+n > 90 ? String.fromCharCode(x.charCodeAt(0)+n-90+64) : String.fromCharCode(x.charCodeAt(0)+n)
        : x.charCodeAt(0)+n > 122 ? String.fromCharCode(x.charCodeAt(0)+n-122+96) : String.fromCharCode(x.charCodeAt(0)+n)
    );

    return answer.join("").replaceAll(String.fromCharCode(32+n)," ");
}