let gridNum = 16;
let gridHold;
let container = document.querySelector("#container");

function createGrid(gridNum) {
    for (let i=0; i < (gridNum * gridNum); i++) {
        gridHold = document.createElement("div");
        gridHold.style.aspectRatio = "1 / 1";
        gridHold.style.width = `${660 / gridNum}px`;
        gridHold.style.boxSizing = "border-box";
        gridHold.style.border = "1px solid black"
        container.appendChild(gridHold);
    }
}

createGrid(16);