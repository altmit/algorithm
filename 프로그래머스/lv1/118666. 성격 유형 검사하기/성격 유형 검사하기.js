function solution(survey, choices) {
    
    var answer = '';
    var arr = [3,2,1,0,1,2,3];
    var obj ={
        "R" : 0,
        "T" : 0,
        "C" : 0,
        "F" : 0,
        "J" : 0,
        "M" : 0,
        "A" : 0,
        "N" : 0
    }
    survey.forEach((e,i) => {
        if(choices[i]-1 < 3) {
            obj[e[0]]+=arr[choices[i]-1];
        } else {
            obj[e[1]]+=arr[choices[i]-1];
        }
    })
    
    let keys = Object.keys(obj);
    let str = ""
    keys.forEach((e,i) => {
        if(i%2 === 0){
            if(obj[e] >= obj[keys[i+1]]) {
                str+=e
            } else {
                str+=keys[i+1]
            }
        }
    })
    return str;
}