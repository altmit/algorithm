function solution(lottos, win_nums) {
    var answer = [];
    var overlap = 0;
    var zero = 0;
    
    lottos.forEach((x) => 
    {
        if(win_nums.includes(x)) {
            overlap++;
        }
        if(x === 0) {
            zero++;
        }
    })
    var max = 7-overlap> 6 ? 6 : 7-overlap;
    var min = 7-(overlap+zero)> 6 ? 6 : 7-(overlap+zero);
    
       
    return [min,max];
}