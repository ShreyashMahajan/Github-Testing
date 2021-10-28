var inputTextFirst = document.querySelector("#inputTextOne");
var inputTextSecond = document.querySelector("#inputTextTwo");
var operatorType = document.querySelectorAll(".buttonCCalculate");
var displayText = document.querySelector("#display");

function addHandler(){
    var inputOne = Number(inputTextFirst.value);
    var inputTwo = Number(inputTextSecond.value);
    return inputOne + inputTwo;
}


function subHandler(){
    var inputOne = Number(inputTextFirst.value);
    var inputTwo = Number(inputTextSecond.value);
    return inputOne - inputTwo;
}


function mulHandler(){
    var inputOne = Number(inputTextFirst.value);
    var inputTwo = Number(inputTextSecond.value);
    return inputOne * inputTwo;
}


function divideHandler(){
    var inputOne = Number(inputTextFirst.value);
    var inputTwo = Number(inputTextSecond.value);
   return inputOne / inputTwo;
}

function clickHandlerTwo(){
    var result = subHandler();
    displayText.innerHTML = "result is " + result;
}
function clickHandlerThree(){
    var result = mulHandler();
    displayText.innerHTML = "result is " + result;
}

function clickHandlerFour(){
    var result = divideHandler();
    displayText.innerHTML = "result is " + result;
}

function clickHandlerOne(){
    var result = addHandler();
    displayText.innerHTML = "result is " + result;
}



operatorType[0].addEventListener("click", clickHandlerOne );
operatorType[1].addEventListener("click", clickHandlerTwo );
operatorType[2].addEventListener("click", clickHandlerThree );
operatorType[3].addEventListener("click", clickHandlerFour );

