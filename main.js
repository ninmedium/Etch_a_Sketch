//Early function model
//add styles to div boxes
let gridNum = 16;
let gridHold;
let container = document.querySelector("#container");

for (let i=0; i < gridNum; i++) {
    gridHold = document.createElement("div");
    container.appendChild(gridHold);
}