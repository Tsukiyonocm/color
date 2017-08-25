var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var winningColor = randomPick();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = winningColor;
var messageDisplay = document.querySelector("#message");

for (var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add clock listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor, winningColor);
    //compare color to clicked color
    if (clickedColor === winningColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
};



//changes colors to same color on win
function changeColors (color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++){
  //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function randomPick(){
  var randomChance = Math.floor(Math.random() * colors.length)
  return colors[randomChance];
}

function generateRandomColors (num){
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor())
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 to 255
  var red = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var green = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")"
}