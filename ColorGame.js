const squares = document.querySelectorAll(".square");
const displaycolor = document.getElementById("ColorDisplay");
const reset = document.getElementById("reset");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
let mode = 6;

init(mode);

function init(n){
    let colors =getcolor(n);
    let PC = pickColor(colors);
    setcolor(colors, PC, n);
    displaycolor.textContent = PC;
}


//Getting a set of ramdom colors araay
function getcolor(mode){
    let color =[];
    for(let i=1;i<=mode;i++)
    {
        color.push(randomColor());
    }
    return(color);
}

//randon function used to generate random colors
function randomColor(){
	//pick a "red" from 0 - 255
	const r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	const g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	const b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

//choose one color as goal which we have to find
function pickColor(colors){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//seting up colors to the squares
function setcolor(colors, pickedColor, n){
    for(let i=0;i<n;i++)
    {
        squares[i].style.background = colors[i];
        squares[i].addEventListener("click", function(){
            const clickedColor = this.style.background;
            
            if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				reset.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "black";
				messageDisplay.textContent = "Try Again"
			}
        })
    }
}    

//function to changing all squares to Answer color
function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

//Reset or Restart function
reset.addEventListener("click", function(){
    location.reload();
})

