function solution(board, moves) {
    let stack = [];
    let count = 0;
    moves.map(e => e-1).forEach((e) => {
        for(let i=0; i<board.length; i++) {
            if(board[i][e] !== 0) {
                if(stack[stack.length-1] === board[i][e]){
                    stack.pop();
                    count += 2;
                } else {
                    stack.push(board[i][e])
                }
                board[i][e] = 0;
                break;
            }
        }
    })
    return count;
}