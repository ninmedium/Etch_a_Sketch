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



createGrid(50);