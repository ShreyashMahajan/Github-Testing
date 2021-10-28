var inputText = document.querySelector("#input-text");
var buttonSubmit = document.querySelector("#button-input");
var displayText = document.querySelector("#display");

var url = "https://api.funtranslations.com/translate/minion.json";
console.log("Hello");
console.log(inputText.value);
function generateUrl(text){
  var getInputText = inputText.value;
  var finalUrl = url + "?text=" + getInputText;
  return finalUrl;
}

var currentUrl =  generateUrl(inputText);
console.log(currentUrl);

