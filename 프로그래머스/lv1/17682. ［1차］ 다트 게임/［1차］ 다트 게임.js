function solution(dartResult) {
    var answer = 0;
    let arr = [];
    let num = "";
    const bonus = {
        "S" : 1,
        "D" : 2,
        "T" : 3
    }
    
    const option = {
        "*" : 2,
        "#" : -1
    }
    
    dartResult= [...dartResult];
    
    dartResult.forEach((e) => {
        if(!isNaN(e)) {
            num = Number(num+e);
        } else{
            if( e !== "*" && e !== "#") {
                num = num ** bonus[e];
                arr.push(num);
                num = 0;
                
            } else {
                arr[arr.length-1] = arr[arr.length-1] * option[e];
                if(e === "*" && arr.length >= 2) {
                    arr[arr.length-2] = arr[arr.length-2] * option[e]
                }
            }
            
            
        }
        
    })
    answer = arr.reduce((a,b) => a+b,0)
    return answer;
}