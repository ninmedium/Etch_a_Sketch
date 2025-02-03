let shadeMode = false;
let gridHold;
let container = document.querySelector("#container");

function createGrid(gridNum) {
    for (let i=0; i < (gridNum * gridNum); i++) {
        gridHold = document.createElement("div");
        gridHold.className = "gridbox";
        gridHold.style.width = `${660 / gridNum}px`;
        container.appendChild(gridHold);
    }
    
    const gridBoxes = document.querySelectorAll(".gridbox");


    
    gridBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        if(box.classList.contains("active") || box.classList.contains("shaded")) {
            return;
        } else if (shadeMode) {
            box.classList.add("shaded");
        } else {
            box.classList.add("active");
        }
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

const shadeButton = document.querySelector("#shade");

shadeButton.addEventListener("click", () => {
    shadeMode = true;
})

//add class as identifier. remove class normally when mouseenter. those untouched can be shaded.