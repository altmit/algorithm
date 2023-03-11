function solution(answers) {
    let answer = [];
    let arr1= [1, 2, 3, 4, 5];
    let arr2=[2, 1, 2, 3, 2, 4, 2, 5];
    let arr3=[3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count =[0,0,0]
    let max = 0;
   
    answers.map((x,i) => {
        x === arr1[i%arr1.length] ? count[0]++ : count
        x === arr2[i%arr2.length] ? count[1]++ : count
        x === arr3[i%arr3.length] ? count[2]++ : count
    })
    
    max = Math.max(...count);
    count.forEach((x,i) => {
        max === x ? answer.push(i+1) : answer
    })
    
    return answer;
}