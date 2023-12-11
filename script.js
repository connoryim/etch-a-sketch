const grid = document.querySelector("#grid");
const div = document.createElement("div");


function newGrid(k) {
    for(let i=0; i<k; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j=0; j<k; j++){
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
        grid.appendChild(row);
    };
    getSquares();
};

const reset = document.querySelector("#reset");

reset.addEventListener("click",(e)=>{
    let rows = document.getElementsByClassName("row");
    while (rows[0]) {
        rows[0].parentNode.removeChild(rows[0]);
    }
    let size = prompt("What size?",16);
    while (size > 100) {
        size = prompt("Too large, enter a new size",100); 
    }
    newGrid(size);
})

let mouseDown = false

grid.addEventListener("mousedown",()=>{
    mouseDown = true
})

document.body.onmouseup = () =>{
    mouseDown = false
}

function getSquares (){
    let squares = document.getElementsByClassName("column");
    for (i=0; i<squares.length; i++){
        squares[i].addEventListener("mousedown", (e)=>{
            e.target.classList.add("clicked");
        })
        squares[i].addEventListener("mouseenter", (e)=>{
            if (mouseDown) {
                e.target.classList.add("clicked");
            }
        })
    } 
}



newGrid(16);
getSquares();