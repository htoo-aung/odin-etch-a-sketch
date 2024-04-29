const drawingBoard = document.getElementById("drawing-container");

function addBox(boxes) {
    for (let i = 0; i < (boxes*boxes); i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        const boxWidth = drawingBoard.style.width / boxes;
        const boxHeight = drawingBoard.style.height / boxes;

        box.style.width = boxWidth + "px";
        box.style.height = boxHeight + "px";

        drawingBoard.appendChild(box);
    }
}
