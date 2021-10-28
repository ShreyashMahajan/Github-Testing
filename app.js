var buttonRed = document.querySelector("#button-red");
var buttonGreen = document.querySelector("#button-green");
var buttonBlue = document.querySelector("#button-blue");
var displayText = document.querySelector("#textDisplay");


function clickHandlerRed(){
    displayText.style.color = 'red';
    
}
function clickHandlerGreen(){
    displayText.style.color = "green";
}

function clickHandlerBlue(){
    displayText.style.color = "blue";
}


buttonRed.addEventListener("click", clickHandlerRed);
buttonGreen.addEventListener("click", clickHandlerGreen);
buttonBlue.addEventListener("click", clickHandlerBlue);