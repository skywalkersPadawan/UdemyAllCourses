const buttonSelect = document.querySelector('button');
const h1 = document.querySelector('h1');

buttonSelect.addEventListener('click', function () {
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

const makeRandomColor = () => {
    const redColor = Math.floor(Math.random() * 255);
    const greenColor = Math.floor(Math.random() * 255);
    const blueColor = Math.floor(Math.random() * 255);
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
};
