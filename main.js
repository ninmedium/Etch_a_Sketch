let gridNum = 16;
let gridHold;
let container = document.querySelector("#container");

function createGrid(gridNum) {
    for (let i=0; i < (gridNum * gridNum); i++) {
        gridHold = document.createElement("div");
        gridHold.className = "gridbox";
        gridHold.style.width = `${660 / gridNum}px`;
        container.appendChild(gridHold);
    }
    
    let gridBoxes = document.querySelectorAll(".gridbox");
    
    gridBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.classList.add("active");
    })
})
}



createGrid(20);

const gridSizeInput = document.querySelector("#gridSizeInput");
const startButton = document.querySelector("#start");

console.log(gridSizeInput);

startButton.addEventListener("click", () => {
    const gridSize = gridSizeInput.value;
    console.log(gridSize);
})