var buttonAdd = document.querySelector("#button-add");
var buttonSub = document.querySelector("#button-sub");
var inputText = document.querySelector("#input-text");

var size = 25;

function clickAddHandler(){
    size = size + 2;
    sizeText = size;
    inputText.style.fontSize = sizeText + "px" ;

}

function clickSubHandler(){
    size = size - 2;
    sizeText = size;
    inputText.style.fontSize = sizeText + "px" ;

}


buttonAdd.addEventListener("click", clickAddHandler);
buttonSub.addEventListener("click", clickSubHandler);
