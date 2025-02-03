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

const gridSizeInput = document.querySelector("#gridSizeInput");
const startButton = document.querySelector("#start");

startButton.addEventListener("click", () => {
    const gridSize = +gridSizeInput.value;
    if (gridSize >= 1 && gridSize <= 100) {
        container.innerHTML = "";
        createGrid(gridSize);
    } else {
        alert("Choose a number between 1 and 100");
    }
})

createGrid(30);