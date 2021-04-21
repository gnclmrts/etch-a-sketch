// Get grid
const n = 16;
let grid = document.querySelector(".grid");
let newGrid = document.querySelector("#create-btn");

newGrid.addEventListener("click", createGrid);

function createGrid() {
    let size = n**2;
    for (let i = 0; i < size; i++) {
        let div = document.createElement("div");   
        grid.appendChild(div);
        div.classList.add("grid-square");
    }
}

const squares = Array.from(document.querySelectorAll(".grid-square"));
squares.forEach(sqr => sqr.addEventListener("mouseover", sqr.classList.add("filled")));
