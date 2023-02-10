process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [a,b] = data.split(" ");
    var star = "*".repeat(a)+"\n";
    console.log(star.repeat(b));
});