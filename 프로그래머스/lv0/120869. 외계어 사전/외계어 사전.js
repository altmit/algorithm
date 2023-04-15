function solution(spell, dic) {
    var answer = 0;
    return dic.filter((e)=>
        spell.length === spell.filter((c)=>e.includes(c)).length 
    ).length ? 1 : 2
    
}