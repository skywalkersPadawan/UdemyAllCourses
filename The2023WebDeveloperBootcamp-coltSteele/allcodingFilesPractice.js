// making a math object
const myMath = {
    PI: 3.1424,
    square: function (number) {
        return number ** 2;
    },
    cube: function (number) {
        return number ** 3;
    },
};

console.log(myMath.PI);
console.log(myMath.square(5));
console.log(myMath.cube(5));

// we would not need the function specified so the following will also work
/* 
const myMath = {
    PI: 3.1424,
    square(number) {
        return number ** 2;
    },
    cube(number) {
        return number ** 3;
    },
};

*/
