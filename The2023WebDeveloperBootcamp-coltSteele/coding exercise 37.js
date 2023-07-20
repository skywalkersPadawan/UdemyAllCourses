// define isSnakeEyes below:
function isSnakeEyes(rollOne, rollTwo) {
    if (rollOne === 1 && rollTwo === 1) {
        console.log('Snake Eyes!');
    } else {
        console.log('Not Snake Eyes!');
    }
}

isSnakeEyes(1, 1);
isSnakeEyes(1, 5);
isSnakeEyes(4, 5);
