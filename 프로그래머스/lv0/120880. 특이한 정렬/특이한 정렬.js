function solution(numlist, n) {
    numlist.sort((a,b) => b-a)
    var arr = numlist.map((e,i) => { return [Math.abs(e-n),i ] }).sort((a,b) => a[0]-b[0] );
    return arr.map((e) => numlist[e[1]]);
}