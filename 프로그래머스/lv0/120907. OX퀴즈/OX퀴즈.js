function solution(quiz) {
    const answer = [];
    
    quiz.forEach((e)=> {
        const [ceremony, result] =  e.split(" = ");
        const arr =  ceremony.split(" ");
        ceremony.includes("+") ? arr[2] *= 1 : arr[2] *= -1;
        answer.push(Number(arr[0]) + arr[2] === Number(result)?"O":"X")

    })
    
    return answer;
}