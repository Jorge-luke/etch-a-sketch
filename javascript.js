//create an array with 16 square objects(divs) inside it. Should be a grid without using css grid, only flexbox

const body = document.querySelector("body");
let squares=[];
const container = document.querySelector(".container");

const box = document.createElement("div");
box.classList.add("box");
body.appendChild(box);

const btn = document.createElement("button");
btn.classList.add("button");
box.appendChild(btn);
body.appendChild(container);
btn.textContent = "Click Here";


let pxNumber = 0;

function makeSquares(pxNumber){
for(i=0;i<pxNumber*pxNumber;i++){
    const square = document.createElement("div");

    const squareSize = (600 - (pxNumber - 1) * 4) / pxNumber;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;


    squares.push(square);
    container.appendChild(square);
    square.classList.add("square");
    square.id = "square-" + (i+1);


    let darkeningIndex = 1;

    squares.forEach(function(square){square.addEventListener("mouseover",  
    function (){
            
    let squareColor1 = Math.floor(Math.random()*256);
    let squareColor2 = Math.floor(Math.random()*256);
    let squareColor3 = Math.floor(Math.random()*256);

    squareColor1 *= darkeningIndex;
    squareColor2 *= darkeningIndex;
    squareColor3 *= darkeningIndex;

    square.style.backgroundColor = `rgb(${squareColor1},${squareColor2},${squareColor3})`;;
    darkeningIndex = Math.max(darkeningIndex - 0.1, 0);
    });
    }
    );

   /* square.addEventListener("mouseout",  ()=>{
        square.style.backgroundColor = "aqua";
        });
        */
        
    }};


    
makeSquares(1);

btn.addEventListener("click", function getpxNumber() {
    
    pxNumber = prompt("What is the number of squares you want?");
    if (pxNumber >100 || pxNumber < 1){
        alert("It must be between 1 and 100!");
    }else{
    squares.forEach(square => square.remove());
    makeSquares(pxNumber);
    }
});


