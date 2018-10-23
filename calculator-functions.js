$(document).ready(function(){
    let clearDisplay = "0"
    let currentDisplay = "";
    let numberCount = 1;
    let valuesToCalculate = [];
    document.getElementById("display").innerHTML = clearDisplay;

    $("#clear").click(function() {        
        currentDisplay = "";
        numberCount = 1;
    });

    $("#divide").click(function() {        
        currentDisplay += " / ";
        numberCount++;
    });
    
    $("#multiply").click(function() {        
        currentDisplay += " x ";
        numberCount++;
    });

    $("#seven").click(function() {        
        currentDisplay += "7";
    });

    $("#eight").click(function() {        
        currentDisplay += "8";
    });

    $("#nine").click(function() {        
        currentDisplay += "9";
    });

    $("#subtract").click(function() {        
        currentDisplay += " - ";
        numberCount++;
    });

    $("#four").click(function() {        
        currentDisplay += "4";
    });

    $("#five").click(function() {        
        currentDisplay += "5";
    });

    $("#six").click(function() {        
        currentDisplay += "6";
    });

    $("#add").click(function() {        
        currentDisplay += " + ";
        numberCount++;
    });

    $("#one").click(function() {        
        currentDisplay += "1";
    });

    $("#two").click(function() {        
        currentDisplay += "2";
    });

    $("#three").click(function() {        
        currentDisplay += "3";
    });

    $("#zero").click(function() {        
        currentDisplay += "0";
    });

    $("#decimal").click(function() {        
        currentDisplay += ".";
    });

    $("#equals").click(function() {        
        let numbers = currentDisplay.split(' ');
        let value = 0;

        for (let i = 0; i < numbers.length; i+= 2) {
            numbers[i] = parseInt(numbers[i]);
        }

        console.log(numbers);
        value = numbers[0];

        for (let i = 1; i < numbers.length; i+= 2) {            
            console.log('value: ' + value);
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