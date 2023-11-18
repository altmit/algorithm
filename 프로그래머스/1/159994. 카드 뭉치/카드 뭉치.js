function solution(cards1, cards2, goal) {
    const answer = [];
    for(let i = 0; i<goal.length; i++) {
        if(goal[i] === cards1[0]) {
            answer.push(cards1.shift())
        } else if(goal[i] === cards2[0]) {
            answer.push(cards2.shift())
        } else {
            return 'No'
        }
    }
    console.log(answer)
    return 'Yes';
}