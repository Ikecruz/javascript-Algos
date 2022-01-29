/*

    Write a program that finds the summation of every number from 1 to num. 
    The number will always be a positive integer greater than 0.

    Example :
    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

*/

const summation = (num) => Array(num).fill(0).map((e, i) => i + 1).reduce((a,b) => a + b, 0);

console.log(summation(20));