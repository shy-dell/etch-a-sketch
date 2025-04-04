// create divs
const container = document.querySelector('#container');
document.addEventListener('DOMContentLoaded', () => {
    for (let i=0; i < 256;i++) {
        const newDiv = document.createElement('div');
        newDiv.style.border = '1px solid black';
        container.appendChild(newDiv);
        console.log('created a new div')
    }
});
