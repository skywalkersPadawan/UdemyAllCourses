// DEFINE YOUR FUNCTION BELOW:
function returnDay(numberOne) {
    if (numberOne === 1) {
        return 'Monday';
    } else if (numberOne === 2) {
        return 'Tuesday';
    } else if (numberOne === 3) {
        return 'Wednesday';
    } else if (numberOne === 4) {
        return 'Thursday';
    } else if (numberOne === 5) {
        return 'Friday';
    } else if (numberOne === 6) {
        return 'Saturday';
    } else if (numberOne === 7) {
        return 'Sunday';
    } else {
        return null;
    }
}

returnDay(1); // "Monday"
returnDay(7); // "Sunday"
returnDay(4); // "Thursday"
returnDay(0); // null
