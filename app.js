document.getElementById("create-pin").addEventListener("click",function(){
    var createPin = Math.round(1000 + Math.random()*9000);
    document.getElementById("pin").value =createPin;

})