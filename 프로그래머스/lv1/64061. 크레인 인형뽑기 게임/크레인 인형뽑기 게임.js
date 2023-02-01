function solution(board, moves) {
    let stack = [];
    let count = 0;
    moves.forEach((m_i) => {
        let current = 0;
        while(board.length > current) {
            if(board[current][m_i-1] !== 0) {
                if(stack[stack.length-1] === board[current][m_i-1]) {
                    board[current][m_i-1] = 0;
                    stack.pop();
                    count+=2;
                    break;
                }
                stack.push(board[current][m_i-1])
                board[current][m_i-1] = 0;
                break ;
            }
            current ++
        }
    })
    return count;
}