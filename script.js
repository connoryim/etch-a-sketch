const grid = document.querySelector("#grid");
const div = document.createElement("div");


function newGrid(k) {
    for(let i=0; i<k; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j=0; j<k; j++){
            const column = document.createElement("div");
            column.classList.add("column");
            column.style.backgroundColor = "white";
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

let penSelect = true;
let eraserSelect = false;
let rainbowSelect = false;
let shadeSelect = false;



const pen = document.querySelector("#pen");
const eraser = document.querySelector("#eraser");
const rainbow = document.querySelector("#rainbow");
const shade = document.querySelector("#shade");

pen.addEventListener("click",()=>{
    penSelect = true;
    eraserSelect = false;
    rainbowSelect = false;
    shadeSelect = false;
})

eraser.addEventListener("click",()=>{
    penSelect = false;
    eraserSelect = true;
    rainbowSelect = false;
    shadeSelect = false;
})

rainbow.addEventListener("click",()=>{
    penSelect = false;
    eraserSelect = false;
    rainbowSelect = true;
    shadeSelect = false;
})

shade.addEventListener("click",() =>{
    penSelect = false;
    eraserSelect = false;
    rainbowSelect = false;
    shadeSelect = true;
})

function getSquares (){
    let squares = document.getElementsByClassName("column");
    for (i=0; i<squares.length; i++){
        squares[i].addEventListener("click", (e)=>{
            if (penSelect){
                e.target.style.backgroundColor = "black";
            } else if (eraserSelect){
                e.target.style.backgroundColor = "white";
            } else if (rainbowSelect){
                let rainbowColor = "rgba("+rValue()+","+rValue()+","+rValue()+")";
                e.target.style.backgroundColor = rainbowColor;
            } else if(shadeSelect){
                let newShade = shadeValue(colorValue(e.target))
                console.log(newShade);
                e.target.style.backgroundColor = newShade;
            }
        })
        squares[i].addEventListener("mouseenter", (e)=>{
            if (mouseDown) {
                if(penSelect){
                e.target.style.backgroundColor = "black";
                }else if (eraserSelect){
                    e.target.style.backgroundColor = "white";
                }else if (rainbowSelect){
                    let rainbowColor = "rgba("+rValue()+","+rValue()+","+rValue()+")";
                    e.target.style.backgroundColor = rainbowColor;
                }else if(shadeSelect){
                    let newShade = shadeValue(colorValue(e.target))
                    console.log(newShade);
                    e.target.style.backgroundColor = newShade;
                }
            }
        })
    } 
}
newGrid(16);

function rValue(){
    return Math.floor(Math.random()*255);
}

    function colorValue(value){
        let intial = window.getComputedStyle(value,null).getPropertyValue("background-color");
    return  newColor = intial.substring(4,intial.length-1).replace(/ /g,"").split(",");
    
}

function shadeValue(value){
    let shadeColor = "rgba("
    for(i=0; i<3; i++){
        if(i===2){
            shadeColor = shadeColor + Math.round(value[i]-26) + ")"
            continue;
        }
        shadeColor = shadeColor + Math.round(value[i]-26) + ","
    }
    return shadeColor;
}