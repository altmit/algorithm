function solution(arr1, arr2) {
    var answer = new Array();
    
    arr1.map((x,i) => 
        answer.push(x.map((y,j) =>
            y+arr2[i][j]
        ))
    )
    return answer;
}