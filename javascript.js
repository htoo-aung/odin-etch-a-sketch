const drawingBoard = document.getElementById("drawing-container");

function fillBoard(boxes) {
    const dimensions = boxes * boxes;

    for (let i = 0; i < dimensions; i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        let drawingBoardDim = window.getComputedStyle(drawingBoard);

        const drawingBoardWidth = drawingBoardDim.width.slice(0, 3);
        const drawingBoardHeight = drawingBoardDim.height.slice(0, 3);

        const boxWidth = Number(drawingBoardWidth) / boxes;
        const boxHeight = Number(drawingBoardHeight) / boxes;

        box.style.width = `${boxWidth}px`;
        box.style.height = `${boxHeight}px`;

        drawingBoard.appendChild(box);

        console.log(boxWidth)
    }
}

