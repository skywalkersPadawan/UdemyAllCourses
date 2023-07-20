const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return 'EGG';
    },
};

hen.name; // "Helen"
hen.eggCount; // 0
hen.layAnEgg(); // "EGG"
hen.layAnEgg(); // "EGG"
hen.eggCount; // 2

// console.log(hen.name);
// console.log(hen.layAnEgg());
// console.log(hen.layAnEgg());
// console.log(hen.eggCount);
