var passwordInput = document.querySelector("#input-pass");
var buttonClick = document.querySelector("#button-submit");
var displayText = document.querySelector("#display");

function clickHandler(){
    var passwordText = passwordInput.value;
    
   if (passwordText.length < 10){
       displayText.innerHTML = "error";
   }else {
    displayText.innerHTML = "Sucess";
    buttonClick.disabled = true;
   }
}

function clickInputHandler(){
    var passwordText = passwordInput.value;
    if(passwordText.length < 10 ){
        passwordInput.style.color = "red";
    }else {
        passwordInput.style.color = "green";
    }
}

buttonClick.addEventListener("click", clickHandler);
passwordInput.addEventListener("input", clickInputHandler);