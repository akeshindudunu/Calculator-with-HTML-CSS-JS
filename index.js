const display = document.getElementById("display");

function clearDisplay(){
    display.value ="";
}
function appendToDisplay(x){
    display.value += x;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }    
}

