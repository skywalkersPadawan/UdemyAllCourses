const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const selectAllSpans = document.querySelectorAll('h1 span');
for (let i = 0; i < selectAllSpans.length; i++) {
    selectAllSpans[i].style.color = colors[i];
}

// the code is working and this is the end of the code control instructions syntax
