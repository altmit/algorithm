function solution(dots) {
    var arr = []
    for(let i =0; i<dots.length-1; i++) {
       const first = (dots[0][0]-dots[1][0]) / ( dots[0][1]-dots[1][1]);
       const second = (dots[2][0]-dots[3][0]) / (dots[2][1]-dots[3][1]);
        if( first === second) {
            return 1
        }
        dots.push(dots.shift())
    }
    
    
    return 0;
}