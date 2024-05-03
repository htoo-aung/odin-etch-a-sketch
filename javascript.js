const drawingBoard = document.getElementById("drawing-container");
const boxes = drawingBoard.querySelectorAll("div");

const userInput = document.getElementById("board-size-input");

const applyBtn = document.getElementById("apply-btn");
const clearBtn = document.getElementById("clear-btn");
const drawBtn = document.getElementById("draw-btn");
const eraseBtn = document.getElementById("erase-btn");
const multicolorBtn = document.getElementById("multicolor-btn");
const colourSelect = document.getElementById("colour-select");

let colour = colourSelect.value;
let drawOn = true;
let multicolor = false;

/**
 * Fills a div element with smaller div boxes by box*box. Size for the div boxes are calculated.
 * 
 * @param {Element} drawingContainer - An element div to be filled.
 * @param {number} boxes - A number to define how many boxes are in a row and column.
 */
function fillBoard(drawingContainer, boxes) {
    const dimensions = boxes * boxes;

    // Get the dimensions of the drawing canvas and store in references.
    const drawingBoardDim = window.getComputedStyle(drawingContainer);
    const drawingBoardWidth = drawingBoardDim.width.slice(0, -2);
    const drawingBoardHeight = drawingBoardDim.height.slice(0, -2);
    
    // Calculate our "pixels"/box by dividing the canvas dimensions by how many boxes 
    // - leads to even boxes 
    const boxWidth = Number(drawingBoardWidth) / boxes;
    const boxHeight = Number(drawingBoardHeight) / boxes;

    for (let i = 0; i < dimensions; i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        box.style.width = `${boxWidth}px`;
        box.style.height = `${boxHeight}px`;

        drawingContainer.appendChild(box);
    }
}

function eraseAll(drawingContainer) {
    const boxes = drawingContainer.querySelectorAll('div');

    boxes.forEach((box) => {
        box.style.backgroundColor = "#ffffff";
    });
}

function clearBoard(drawingContainer) {
    const boxes = drawingContainer.querySelectorAll('div');
    // Check if board is empty

    boxes.forEach((box) => {
        box.remove();
    });
}

function draw(drawingContainer) {
    const boxes = drawingContainer.querySelectorAll('div');

    const drawing = event => {
        event.preventDefault();
        if (drawOn === true) {
            event.target.style.backgroundColor = colour;
        }
        else {
            event.target.style.backgroundColor = "#ffffff";
        }
    }

    boxes.forEach((box) => {
        box.addEventListener('mousedown', (event) => {
            event.preventDefault();
            drawing(event);
        });
        box.addEventListener("mouseover", event => {
            if (event.buttons == 1) drawing(event);
        });
    });
}

applyBtn.addEventListener('click', () => {
    if (userInput.value > 100 || userInput.value < 1) {
        userInput.style.border = "2px #ffcc00 solid";
    }
    else {
        clearBoard(drawingBoard);
        fillBoard(drawingBoard, userInput.value);
        userInput.style.border = "2px #000000 solid";
    }

    userInput.value = "";

    draw(drawingBoard);
});

clearBtn.addEventListener('click', () => {
    eraseAll(drawingBoard);
});

drawBtn.addEventListener('click', () => {
    drawOn = true;
    drawBtn.style.border = "2px #7CC47C solid";
    eraseBtn.style.border = "2px #000000 solid";
    multicolorBtn.style.border = "2px #000000 solid"
});

eraseBtn.addEventListener('click', () => {
    drawOn = false;
    eraseBtn.style.border = "2px #7CC47C solid";
    drawBtn.style.border = "2px #000000 solid";
    multicolorBtn.style.border = "2px #000000 solid"
});

multicolorBtn.addEventListener('click', () => {
    multicolor = true;
    multicolorBtn.style.border = "2px #7CC47C solid"
    drawBtn.style.border = "2px #000000 solid";
    eraseBtn.style.border = "2px #000000 solid";
});

colourSelect.addEventListener('change', () => {
    colour = colourSelect.value;
});

fillBoard(drawingBoard, 16);
draw(drawingBoard);
