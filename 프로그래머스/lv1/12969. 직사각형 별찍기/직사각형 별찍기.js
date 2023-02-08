process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var star = "*".repeat(a)+"\n";
    console.log(star.repeat(b));
});