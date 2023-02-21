function solution(s) {
    var answer = 0;
    var arr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ]

    arr.forEach((x,i) => s=s.replaceAll(x,i));

    
    return Number(s);
}