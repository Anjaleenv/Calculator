 //calculator program
let  displayValue=" ";

function appendToDisplay(value){
    displayValue+=value;
    document.getElementById("display").value=displayValue
}
function clearDisplay(){
displayValue=""
document.getElementById("display").value="";
}
function deleteLast(){
    displayValue=displayValue.slice(0,-1);
    document.getElementById("display").value=displayValue
}
function calculateResult(){
    try{
        displayValue =eval (displayValue);
        document.getElementById("display").value=displayValue;
    }catch{
        document.getElementById("display").value="Error"
    }
}
 document.addEventListener("keydown", function (event) {
    const key = event.key;

    if ((!isNaN(key) && key !== " ") || "+-*/.".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key.toLowerCase() === "c") {
        clearDisplay();
    }
});