function solution(my_string) {
    let answer = 0;
    let temp = "";
    
    for(let i =0; i<my_string.length; i++) {
        if(!isNaN(my_string[i])){
            temp += my_string[i];
            continue
        }
        answer += Number(temp);
        temp = "";   
    }
    return answer+ Number(temp);
}