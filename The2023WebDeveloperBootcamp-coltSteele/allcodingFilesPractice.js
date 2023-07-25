function twist() {
    console.log('this is twisting operation!');
}

function shout() {
    console.log('this is shout operation!');
}

const twistAndShoutButton = document.querySelector('#twistAndShout');
// twistAndShoutButton.onclick = shout;
// twistAndShoutButton.onclick = twist;
/* we cannot have two different call back functions for the same event using the same onclick */
/* so we will be using addEventListener */

twistAndShoutButton = addEventListener('click', twist, { once: true });
twistAndShoutButton = addEventListener('click', shout, { once: true });
