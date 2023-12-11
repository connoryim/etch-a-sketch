const grid = document.querySelector("#grid");
const div = document.createElement("div");

for(let i=0; i<16; i++){
    const row = document.createElement("div");
    for(let j=0; j<16; j++){
        const column = document.createElement("div");
        row.appendChild(column);
    }
    grid.appendChild(row);
};
