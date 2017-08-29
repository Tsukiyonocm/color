var numSquares = 6;
var colors = [];
var winningColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = winningColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();  
  setupSquares();  
  reset();
};

//Setup Squares
function setupSquares(){
  //Initial values for the game
  for (var i = 0; i < squares.length; i++){
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
  }
}

//Setup Mode Buttons
function setupModeButtons (){
  //mode buttons event listeners
  for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    reset();
    })
  }
}

//reset Button
resetButton.addEventListener("click", function(){
  reset();
});


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

//Generate random squares array
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

//Create random colors
function randomColor(){
  //pick a "red" from 0 to 255
  var red = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var green = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")"
}

//Reset
function reset(){
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  winningColor = randomPick();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = winningColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  //change h1 back to default color
  h1.style.backgroundColor = "steelblue";
}