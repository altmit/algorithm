function solution(numbers) {
    numbers = numbers.sort((a,b) => b-a);
    const positive = numbers[0] * numbers[1];
    const negative = numbers[numbers.length-1] * numbers[numbers.length-2];
    
    return positive > negative ? positive : negative
}