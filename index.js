const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculatebtn(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}

function clearbtn(){
    display.value = "";
}

