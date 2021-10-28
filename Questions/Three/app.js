var inputText = document.querySelector("#input-text");
var buttonH1 = document.querySelector("#button-one");
var buttonH2 = document.querySelector("#button-Two");
var buttonH3 = document.querySelector("#button-Three");

function clickHandlerH1(){
   inputText.value = " 24 ";
}
function clickHandlerH2(){
    inputText.style.fontSize = "24px";
 }
 function clickHandlerH3(){
    inputText.style.fontSize = "18px";
 }


buttonH1.addEventListener("click", clickHandlerH1);
buttonH2.addEventListener("click", clickHandlerH2);
buttonH3.addEventListener("click", clickHandlerH3);