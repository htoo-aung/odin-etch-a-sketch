const drawingBoard = document.getElementById("drawing-container");

const userInput = document.getElementById("board-size");

const applyBtn = document.getElementById("apply-btn");
const eraseBtn = document.getElementById("erase-btn");
const multicolorBtn = document.getElementById("multicolor-btn");



function fillBoard(boxes) {
    const dimensions = boxes * boxes;

    const drawingBoardDim = window.getComputedStyle(drawingBoard);
    const drawingBoardWidth = drawingBoardDim.width.slice(0, 3);
    const drawingBoardHeight = drawingBoardDim.height.slice(0, 3);
    
    const boxWidth = Number(drawingBoardWidth) / boxes;
    const boxHeight = Number(drawingBoardHeight) / boxes;

    for (let i = 0; i < dimensions; i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        box.style.width = `${boxWidth}px`;
        box.style.height = `${boxHeight}px`;

        drawingBoard.appendChild(box);
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
    fillBoard(userInput.value);
    userInput.value = "";
});
