function solution(board) {
    const dRows = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dCols = [0, 1, 1, 1, 0, -1, -1, -1];
    var answer = board.length * board.length;
    var arr = [];
    
    for(let i = 0; i < board.length; i++) {
        for(let j=0; j<board.length; j++) {
            if(board[i][j] === 1) {
                arr.push([i,j]);
                answer--;
            }
        }
    }
    
    arr.forEach((e) => {
        for(let i=0; i<dRows.length; i++) {
            const r =  e[0] + dRows[i];
            const c = e[1] + dCols[i];
            
            if(r >= 0 && board.length > r && c >= 0 && board.length > c && board[r][c] === 0){
                board[r][c] = 1
                answer--;
            }
        }
    })

    return answer;
}