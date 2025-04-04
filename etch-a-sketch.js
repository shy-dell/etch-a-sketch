// create divs
const container = document.querySelector('#container');
document.addEventListener('DOMContentLoaded', () => {
    for (let i=1; i <= 16;i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`row${i}`)
        newDiv.style.border = '1px solid black';
        container.appendChild(newDiv);
        for (let n = 1; n <=16; n++) {
            const childContainer = document.querySelector(`.row${i}`);
            const childDiv = document.createElement('div');
            childDiv.style.border = '1px solid black';
            childContainer.appendChild(childDiv);
        }
    }
});