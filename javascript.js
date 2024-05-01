const drawingBoard = document.getElementById("drawing-container");

const userInput = document.getElementById("board-size-input");

const applyBtn = document.getElementById("apply-btn");
const drawBtn = document.getElementById("draw-btn");
const eraseBtn = document.getElementById("erase-btn");
const multicolorBtn = document.getElementById("multicolor-btn");

let drawOn = true;
let multicolor = false;


function fillBoard(drawingContainer, boxes) {
    const dimensions = boxes * boxes;

    const drawingBoardDim = window.getComputedStyle(drawingContainer);
    const drawingBoardWidth = drawingBoardDim.width.slice(0, -2);
    const drawingBoardHeight = drawingBoardDim.height.slice(0, -2);
    
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

function clearBoard() {
    const boxes = document.querySelectorAll("#drawing-container div");

    // Check if board is empty

    boxes.forEach((box) => {
        box.remove()
    });
}

applyBtn.addEventListener('click', () => {
    if (userInput.value > 100 || userInput.value < 1) {
        userInput.style.border = "2px #ffcc00 solid";
    }
    else {
        clearBoard();
        fillBoard(drawingBoard, userInput.value);
        userInput.style.border = "2px #000000 solid";
    }

    userInput.value = "";
});

drawBtn.addEventListener('click', () => {
    drawOn = true;
});

eraseBtn.addEventListener('click', () => {
    drawOn = false;
});

multicolorBtn.addEventListener('click', () => {
    multicolor = true;
});








fillBoard(drawingBoard, 16);
