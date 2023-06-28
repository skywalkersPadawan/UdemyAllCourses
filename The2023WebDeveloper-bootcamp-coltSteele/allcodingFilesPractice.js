let rating = parseInt(
    prompt(
        'enter the value of the rating to give to the customer in the line: '
    )
);
if (rating === 2) {
    console.log('this is the best thing to happen your rating is ', rating);
} else {
    console.log(
        'this is not good any rating other than 2 is a bad omen so check again your rating is as follows ',
        rating
    );
}
