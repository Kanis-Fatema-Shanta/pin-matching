//generate pin

document.getElementById("create-pin").addEventListener("click",function(){
    var createPin = Math.round(1000 + Math.random()*9000);
    document.getElementById("pin").value =createPin;

})

// get number
function number(num){
    var input = document.getElementById("input-pin");
    switch(num){
        case 1:
            input.value += "1";
            break;
        case 2:
            input.value += "2";
            break;
        case 3:
            input.value += "3";
            break;
        case 4:
            input.value += "4";
            break;
        case 5:
            input.value += "5";
            break; 
        case 6:
            input.value += "6";
            break; 
        case 7:
            input.value += "7";
            break; 
        case 8:
            input.value += "8";
            break;    
        case 9:
            input.value += "9";
            break;
        case 0:
            input.value += "0";
            break;
    }
}

//clear_input_Screen
document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("input-pin").value = "";
})

//backSpace 1 by one
document.getElementById("space").addEventListener("click",function(){
    var input = document.getElementById("input-pin");
    var x = input.value;
    if(x.length > 0 ){
        x = x.substring(0 , x.length - 1);
        input.value = x; 

    }
})

// ---------------  pin matcher function --------------//

document.getElementById("submit").addEventListener("click",function(){
    var input = document.getElementById("input-pin").value;
    var pin = document.getElementById("pin").value;
    if(input == '' || pin == ''){
        alert("please enter 4 digit pin or click generate pin");
    }

    else if (input == pin) {
        display("rightPinNotify","block")
        display("wrongPinNotify","none")
        document.getElementById("input-pin").value = "";
        document.getElementById("pin").value = "";


    } 
    else if( input != pin){
        display("rightPinNotify","none")
        display("wrongPinNotify","block")
        document.getElementById("input-pin").value = "";

        var tryleft = document.getElementById("tryLeft").innerText;
        var count = parseInt(tryleft);
        var tryCount = count - 1;

        document.getElementById("tryLeft").innerText = tryCount;

        if(tryCount <= -1){
            document.getElementById("tryLeft").innerText = 0;
            
        }

        else if ( tryCount == 0){
            document.getElementById("submit").style.display = "none";
             var notify = document.getElementById("warning");
             notify.style.display ="block";


        }

    }
})

document.getElementById("create-pin").addEventListener("click",function(){
    display("submit","block")
    document.getElementById("submit").style.margin = "auto";
    document.getElementById("submit").style.marginTop ="20px";
    display("notify","none")
    document.getElementById("tryLeft").innerText = 3;
    display("wrongPinNotify","none")
    display("rightpinNotify","none")
    document.getElementById("input-pin").value = "";

})

function display(id, property){
    document.getElementById(id).style.display = property;
}