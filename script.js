const grid = document.querySelector("#grid");
const div = document.createElement("div");


function newGrid() {
    for(let i=0; i<16; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j=0; j<16; j++){
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
        grid.appendChild(row);
    };
};

const reset = document.querySelector("#reset");
reset.addEventListener("click",(e)=>{
    var rows = document.getElementsByClassName("row");
    while (rows[0]) {
        rows[0].parentNode.removeChild(rows[0]);
    }
    newGrid();
})

newGrid();