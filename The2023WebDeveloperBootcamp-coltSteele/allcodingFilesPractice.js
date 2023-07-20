// the use of the return keyword
function add(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return false;
    }
    return firstNumber + secondNumber;
}

const result = add(1, 3);
console.log(result);
