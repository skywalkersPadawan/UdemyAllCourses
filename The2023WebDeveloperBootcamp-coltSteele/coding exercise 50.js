function allEvens(arrayOfNumbers) {
    return arrayOfNumbers.every(function (number) {
        return number % 2 === 0;
    });
}

const allEvens = function (arrayOfNumbers) {
    return arrayOfNumbers.every((numbers) => numbers % 2 === 0);
};

const allEvens = (arrayOfNumbers) =>
    arrayOfNumbers.every((numbers) => numbers % 2 === 0);

console.log(allEvens([1, 2, 4, 6, 10, 8]));
