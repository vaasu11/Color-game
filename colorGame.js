var numSquares = 6
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message"); 
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0;i<modeButtons.length;i++)
	{
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy"){
				numSquares=3;
			}
			else{
				numSquares=6;
			}
			reset();
		});
	}
}

function setupSquares(){
	for(var i=0;i<squares.length;i++){
	//add initial colors to squares
		squares[i].style.backgroundColor=colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function(){

			//grab color listeners to squares
			var clickedColor=this.style.backgroundColor;

			//compare color to pickedColor
			if(clickedColor===pickedColor)
			{
				changeColors(clickedColor);
				messageDisplay.textContent="Correct!";
				h1.style.backgroundColor=clickedColor;
				resetButton.textContent="Play Again?";
			}
			else
			{
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try Again";
			}
		});
	}
}

resetButton.addEventListener("click", function(){
	reset();
}); 

function reset(){
	//generate all new colors
	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
}

function changeColors(color){
	//loop through all the squares
	for(var i=0;i<squares.length;i++)
	{
		//change each color to match given color
		squares[i].style.backgroundColor=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr[i]=randomColor();
	}
	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", "+b+")";
}