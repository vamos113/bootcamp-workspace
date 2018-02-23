var numS=6;
var colors= generateRandomColors(numS);
var squares =document.querySelectorAll(".square");
var displayColor=document.getElementById('displayColor');
var pickedColor= pickColor();
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
displayColor.textContent=pickedColor;

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	messageDisplay.textContent="";
	h1.style.background="steelblue";
	numS=3;
colors=generateRandomColors(numS);
		pickedColor=pickColor();
		displayColor.textContent=pickedColor;
		for (var i = 0; i < squares.length; i++) {
			if(colors[i]){
			squares[i].style.background=colors[i];
		}else
		squares[i].style.display="none";
		}})

hardbtn.addEventListener("click",function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	messageDisplay.textContent="";
	h1.style.background="steelblue";
numS=6;
colors=generateRandomColors(numS);
		pickedColor=pickColor();
		displayColor.textContent=pickedColor;
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.background=colors[i];
		squares[i].style.display="block";
		}})

resetButton.addEventListener("click",function(){
		//generate new colors:
		colors=generateRandomColors(numS);
		//pick a random color:
		pickedColor=pickColor();
		//matching picked and displayed color:
		displayColor.textContent=pickedColor;
		//change the color of squares:
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.background=colors[i];
		}
		// reset h1 color:
		h1.style.background="steelblue";
		messageDisplay.textContent="";
		resetButton.textContent="New Colors";

})

for (var i = 0; i < squares.length; i++) {
	// Initializing colors:
	squares[i].style.background=colors[i];
	//add eventlisteners:
	squares[i].addEventListener("click", function () {
		// grap the clicked color
		var clickedColor=this.style.background;
		//compare the clicked and picked color:
		if(clickedColor===pickedColor){
			changeColor(clickedColor);
			h1.style.background=clickedColor;
		messageDisplay.textContent="Correct!"
		resetButton.textContent="Play Again ?";
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again!"
		}
	});
}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
var arr=[];
for (var i = 0; i < num; i++) {
	arr.push(randomColor());
}
return arr;
}

function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}