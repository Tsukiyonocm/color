var backClick = document.querySelector("button");
var isBlue = true;


backClick.addEventListener("click", function(){
  if(isBlue){
      backClick.style.backgroundColor = "orange";
    }
    else {
      backClick.style.backgroundColor = "blue";
    };
  isBlue = !isBlue;
});


