$(document).ready(function(){
    let clearDisplay = "0"
    let currentDisplay = "";
    let numberCount = 1;
    let lastValIsZero = false;
    let decimalInNumber = false;
    let operatorLast = false;
    document.getElementById("display").innerHTML = clearDisplay;

    $("#clear").click(function() {        
        currentDisplay = "";
        numberCount = 1;
        lastValIsZero = false;
        decimalInNumber = false;
        operatorLast = false;
    });

    $("#divide").click(function() {    
        if (operatorLast) {
            let temp = currentDisplay.slice(0, currentDisplay.length - 3);
            currentDisplay = temp;
        }    
        currentDisplay += " / ";
        numberCount++;
        lastValIsZero = false;
        decimalInNumber = false;
        operatorLast = true;
    });
    
    $("#multiply").click(function() {
        if (operatorLast) {
            let temp = currentDisplay.slice(0, currentDisplay.length - 3);
            currentDisplay = temp;
        }         
        currentDisplay += " x ";
        numberCount++;
        lastValIsZero = false;
        decimalInNumber = false;
        operatorLast = true;
    });

    $("#seven").click(function() {        
        currentDisplay += "7";
        lastValIsZero = false;
        operatorLast = false;        
    });

    $("#eight").click(function() {        
        currentDisplay += "8";
        lastValIsZero = false;
        operatorLast = false;        
    });

    $("#nine").click(function() {        
        currentDisplay += "9";
        lastValIsZero = false;
        operatorLast = false;        
    });

    $("#subtract").click(function() {
        if (operatorLast) {
            let temp = currentDisplay.slice(0, currentDisplay.length - 3);
            currentDisplay = temp;
        }        
        currentDisplay += " - ";
        numberCount++;
        lastValIsZero = false;
        decimalInNumber = false;
        operatorLast = true;
    });

    $("#four").click(function() {        
        currentDisplay += "4";
        lastValIsZero = false;
        operatorLast = false;        
    });

    $("#five").click(function() {        
        currentDisplay += "5";
        lastValIsZero = false;  
        operatorLast = false;      
    });

    $("#six").click(function() {        
        currentDisplay += "6";
        lastValIsZero = false; 
        operatorLast = false;       
    });

    $("#add").click(function() {
        if (operatorLast) {
            let temp = currentDisplay.slice(0, currentDisplay.length - 3);
            currentDisplay = temp;
        }         
        currentDisplay += " + ";
        numberCount++;
        lastValIsZero = false;
        decimalInNumber = false;
        operatorLast = true;
    });

    $("#one").click(function() {        
        currentDisplay += "1";
        lastValIsZero = false;  
        operatorLast = false;      
    });

    $("#two").click(function() {        
        currentDisplay += "2";
        lastValIsZero = false;   
        operatorLast = false;     
    });

    $("#three").click(function() {        
        currentDisplay += "3";
        lastValIsZero = false;   
        operatorLast = false;     
    });

    $("#zero").click(function() {
        if (!lastValIsZero) {
            currentDisplay += "0";
        }
        lastValIsZero = true;   
        operatorLast = false;     
    });

    $("#decimal").click(function() {
        if (!decimalInNumber) {
            currentDisplay += ".";
        }        
        lastValIsZero = false;
        operatorLast = false;
        decimalInNumber = true;
    });

    $("#equals").click(function() {        
        let numbers = currentDisplay.split(' ');
        let value = 0;
        operatorLast = false;

        for (let i = 0; i < numbers.length; i+= 2) {
            numbers[i] = parseFloat(numbers[i]);
        }

        value = numbers[0];

        for (let i = 1; i < numbers.length; i+= 2) {            
            
            if (numberCount < 2) {
                value = 'error';
            }

            switch(numbers[i]) {
                case "x":
                    value *= numbers[i + 1];
                    break;
                case "/":
                    value /= numbers[i + 1];
                    break;
                case "+":
                    value += numbers[i + 1];
                    break;
                case "-":
                    value -= numbers[i + 1];
                    break;
                default:
                    value = 'error';
            }            
        }

        value += "";

        if (value[value.length - 1] == '0') {
            lastValIsZero = true;
        } else {
            lastValIsZero = false;
        }      

        currentDisplay = value;
        numberCount = 1;
    });

    $("button").click(function() {
        if (currentDisplay != "") {
            document.getElementById("display").innerHTML = currentDisplay;
        } else {
            document.getElementById("display").innerHTML = clearDisplay;
        }
    });
});