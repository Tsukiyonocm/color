var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var winningColor = randomPick();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = winningColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


easyBtn.addEventListener("click", function(){
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numSquares = 3;
  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  winningColor = randomPick();
  colorDisplay.textContent = winningColor;
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numSquares = 6;
  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  winningColor = randomPick();
  colorDisplay.textContent = winningColor;
  for (var i = 0; i < squares.length; i++){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
});


//reset Button
resetButton.addEventListener("click", function(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  winningColor = randomPick();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = winningColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  //change h1 back to default color
  h1.style.backgroundColor = "steelblue";
  //change button text back to New colors
  resetButton.textContent = "New Colors";
});

//Initial values for the game
for (var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor, winningColor);
    //compare color to clicked color
    if (clickedColor === winningColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
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