var inputText = document.querySelector("#input-text");
var buttonOne = document.querySelector("#button1");
var buttonTwo = document.querySelector("#button2");
var buttonThree = document.querySelector("#button3");

function clickHandler(){
    if(inputText.value.length > 4){
        buttonOne.disabled = false;
        buttonTwo.disabled = false;
        buttonThree.disabled = false;
    }else {
        buttonOne.disabled = true;
        buttonTwo.disabled = true;
        buttonThree.disabled = true;
    }
    
}

function clickButtonOne(){
    inputText.style.color = "red";
}
function clickButtonTwo(){
    inputText.style.color = "green";
}

function clickButtonThree(){
    inputText.style.color = "blue";
}


inputText.addEventListener("change", clickHandler );
buttonOne.addEventListener("click", clickButtonOne);
buttonTwo.addEventListener("click", clickButtonTwo);
buttonThree.addEventListener("click", clickButtonThree);