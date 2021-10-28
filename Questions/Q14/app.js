var displayText = document.querySelector("#display");

var godData = [ {
    name: "Ram",
    age : 2500,
    yuga : "Treta",
},
{
    name: "Krishna",
    age : 2325,
    yuga : "Dwapar",
} ];

function checkAge(godOne , godTwo){
    
    var totalPointOne = godOne.age + (godOne.name.length*35);
    var totalPointTwo = godTwo.age + (godTwo.name.length*35);
    console.log(totalPointOne);
    console.log(totalPointTwo);
     if(totalPointOne > totalPointTwo){
         return godOne.name;
     }else {
         return godTwo.name;
     }
}
var personWithMoreAge = checkAge(godData[0],godData[1]);
console.log(personWithMoreAge);