function solution(food) {
    let answer = '';

    food.shift();
    food.forEach((e,i) => {
       answer += (i+1).toString().repeat(Math.floor(e/2));
    })
    return answer + "0" +[...answer].reverse().join("")
}