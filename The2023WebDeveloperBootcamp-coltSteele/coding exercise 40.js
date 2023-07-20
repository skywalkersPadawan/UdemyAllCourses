// DEFINE YOUR FUNCTION BELOW:
function lastElement(arrayValue) {
    if (arrayValue.length === 0) {
        return null;
    }
    return arrayValue[arrayValue.length - 1];
}

console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));
