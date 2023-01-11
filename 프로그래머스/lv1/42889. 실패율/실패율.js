function solution(N, stages) {
    var arr = [];
    for(var i = 1; i<=N; i++) {
        let a = stages.filter(n => n === i).length;
        let b = stages.filter(n => n >= i).length;
        arr.push({ stage : i, result : a/b });
    }
    
    arr.sort((a,b) => b.result-a.result);
    
    return arr.map((x) => x.stage);;
}
