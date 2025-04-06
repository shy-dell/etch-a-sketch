// create divs
const container = document.querySelector('#container');

// create header
const bodyElement = document.body
const header = document.createElement('h1');
header.classList.add('titleHeader');
header.textContent = "Etch-a-Sketch";
bodyElement.insertBefore(header,container);

for (let i=1; i <= 16;i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(`row${i}`)
    container.appendChild(newDiv);
    for (let n = 1; n <=16; n++) {
        const childContainer = document.querySelector(`.row${i}`);
        const childDiv = document.createElement('div');
        childDiv.classList.add('square');
        childDiv.style.border = '1px solid black';
        childContainer.appendChild(childDiv);
    };
};