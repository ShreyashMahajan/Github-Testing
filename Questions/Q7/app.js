// api link - https://api.funtranslations.com/translate/ 
var textInput = document.querySelector("#text-input");
var buttonSubmit = document.querySelector("#button-submit");
var displayText = document.querySelector("#display");

var url = "https://api.funtranslations.com/translate/minion.json";

function generateUrl(text){
    var inputText = text.value;
    var finalUrl = url + "?text=" + inputText;
    return finalUrl;
}
function errorHandler(error){
    console.log(error);
    alert("error occured " +error);
}

function clickHandler(){
    var currentUrl = generateUrl(textInput);
 
    fetch(currentUrl)
    .then( function responseHandler(response) { return response.json()})
    .then( function outputHandler(json) { return console.log(json)} )
    // .then( json =>  {
    //      var outputText;
    //      outputText = json.contents.translated;
    //      displayText.innerHTML = outputText;
         
    //     }
    
        .catch(errorHandler)
      
    displayText.style.textTransform = "capitalize";
    displayText.style.color = "red";
    
  
    
}
buttonSubmit.addEventListener("click", clickHandler);