let clockDivId = document.getElementById('idClockDiv')

setInterval(function(){
    let dt  = new Date();
    clockDivId.innerHTML = dt.toLocaleTimeString();
},1000)