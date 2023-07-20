// DEFINE YOUR FUNCTION BELOW:
function sumArray(arrayOfNumbers) {
    let sumofArrayNumbers = 0;
    for (let loopVariable of arrayOfNumbers) {
        sumofArrayNumbers += loopVariable;
    }
    return sumofArrayNumbers;
}

sumArray([1, 2, 3]); // 6
sumArray([2, 2, 2, 2]); // 8
sumArray([50, 50, 1]); // 101
