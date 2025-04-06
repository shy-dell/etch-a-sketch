// create container
const container = document.querySelector('#container');

// create header
const bodyElement = document.body
const header = document.createElement('h1');
header.classList.add('titleHeader');
header.textContent = "Etch-a-Sketch";
bodyElement.insertBefore(header,container);

// Prep functions to build table
function promptAgain() {
    alert('That was outside the acceptable range.')
    squaresRequested = prompt("Please input the number of rows and columns you would like, between 1 and 100. Reminder: the Etch-a-Sketch is a square so this will be the same value for both.");
    return squaresRequested;
};

function createSketch(numberOfSquaresPerRow){
    for (let i=1; i <= numberOfSquaresPerRow;i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add(`row${i}`)
        container.appendChild(newDiv);
        for (let n = 1; n <=numberOfSquaresPerRow; n++) {
            const childContainer = document.querySelector(`.row${i}`);
            const childDiv = document.createElement('div');
            childDiv.classList.add('square');
            childDiv.style.border = '1px solid black';
            childContainer.appendChild(childDiv);
        };
    };
};

// default the box to 16 x 16
let squaresRequested = 16;
createSketch(squaresRequested);

// tell the user how big their table is
function calculateBoxCount(squaresRequested) { 
    let boxTotal = Number(squaresRequested) * Number(squaresRequested);
    const boxSize = document.createElement('div');
    boxSize.classList.add('boxSize');
    bodyElement.insertBefore(boxSize,container);
    boxSize.textContent = `This Etch-a-Sketch is ${squaresRequested} x ${squaresRequested}. Therefore ${boxTotal} squares.`;
    
    return boxSize;

};
calculateBoxCount(squaresRequested);

// Create button and div to host button
const buttonDiv = document.createElement('div');
buttonDiv.classList.add('buttonDiv');
bodyElement.insertBefore(buttonDiv,container);

const button = document.createElement('button');
button.textContent = "Change Box Size";
button.classList.add('changeButton');
buttonDiv.appendChild(button)

// If the button is pressed prompt user for number of rows / columns and promptAgain if outside the acceptable range
button.addEventListener('click', () => {
    squaresRequested = prompt("Please input the number of rows and columns you would like, between 1 and 100. Reminder: the Etch-a-Sketch is a square so this will be the same value for both.");
    if (squaresRequested > 100 ||
        squaresRequested <= 0 ||
        squaresRequested === "" ||
        squaresRequested === null) {
            promptAgain()
        } else {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            createSketch(squaresRequested);
            
            bodyElement.removeChild(document.querySelector('.boxSize'));
            calculateBoxCount(squaresRequested);
        };
});

// Get random RGB value - we add 1 because otherwise this wouldn't be inclusive of the max
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

const r = getRandomArbitrary(0,255);
console.log(r);
const g = getRandomArbitrary(0,255);
console.log(g);
const b = getRandomArbitrary(0,255);
console.log(b);