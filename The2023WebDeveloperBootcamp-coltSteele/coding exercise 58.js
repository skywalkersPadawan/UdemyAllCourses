// need to create 100 buttons

const container = document.getElementById('container');
for (let i = 0; i < 100; i++) {
    const button = document.createElement('button');
    button.innerText = `Button ${i}`;
    container.appendChild(button);
}
