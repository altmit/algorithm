function solution(numbers) {
    var answer = [];
    numbers.map((x,i)=> numbers.map((y,j) => {
        if(i!==j){
            answer.push(x+y);
        }
    }))
    answer = [...new Set(answer)].sort((a,b) => a-b );

    return  answer;
}