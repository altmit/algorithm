function solution(my_string) {
    const a = my_string.split(" ");
    let sum = Number(a[0]);
    
    a.forEach((e,i)=> {
        if(e ==="+") {
            sum += Number(a[i+1]);
        } 
        if(e === "-") {
            sum -= Number(a[i+1]);
        }
    });
    return sum;
}