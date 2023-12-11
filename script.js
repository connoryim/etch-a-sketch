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
};

const reset = document.querySelector("#reset");

reset.addEventListener("click",(e)=>{
    let rows = document.getElementsByClassName("row");
    while (rows[0]) {
        rows[0].parentNode.removeChild(rows[0]);
    }
    let size = prompt("What size?",16);
    newGrid(size);
})
newGrid(16);