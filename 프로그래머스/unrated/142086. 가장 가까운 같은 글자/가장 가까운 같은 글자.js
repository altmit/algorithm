function solution(s) {
    var answer = [];
    return [...s].map((e,i) => {
        
            const result = [...s.slice(0,i)].reverse().indexOf(e)
            return result === -1 ? -1 : result+1
        
    })
}