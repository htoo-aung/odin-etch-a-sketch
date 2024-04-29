const drawingBoard = document.getElementById("drawing-container");

function addBox(boxes) {
    for (let i = 0; i < (boxes*boxes); i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        drawingBoard.appendChild(box);
    }
}
