function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const arr =  [ Math.floor(board[0] / 2) ,Math.floor(board[1] / 2) ];
    

    for(let a of keyinput){
        switch(a){
            case "left": x--; 
                break;
            case "right": x++; 
                break;
            case "down": y--;
                break;
            case "up": y++;
                break;
        }
        
        if(Math.abs(x)>arr[0]){
            x = x > 0 ? arr[0] : arr[0] * -1;
         }
        if(Math.abs(y)>arr[1]){
            y = y > 0 ? arr[1] : arr[1] * -1;
        }
        
    }
    return [x,y];
}