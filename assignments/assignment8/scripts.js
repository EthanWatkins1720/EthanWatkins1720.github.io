const displayFunds = () => {
    const funding = parseInt(document.getElementById("funds").value);
    const funding1 = funding/100;
    if (funding1 < 0 || funding1 == 0 ) {
        document.getElementById("thermometer").style.background = "white";
    } 
    if (funding1 > 0 && funding1 < 100) {
        let degree = 0;
        let interval = setInterval (() => {
            document.getElementById("thermometer").style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,255,255,1)"+degree+"%)";
            degree = degree + 1;
            if (degree == funding1 + 1) {
                clearInterval(interval);
            }
        }, 100)    
    } 
    if (funding1 == 100 || funding1 > 100) {
        document.getElementById("thermometer").style.background = "red";
    }
}   

const doTheRunningMan = () => {
    let distance = 0;
    let interval = setInterval(() => {
        let runner = document.getElementById("running-man");
        style = window.getComputedStyle(runner);
        if (style.getPropertyValue('display') == "none") {
            document.getElementById("running-man").style.display = "block";
            document.getElementById("walking-man").style.display = "none";
        } else {
            document.getElementById("running-man").style.display = "none";
            document.getElementById("walking-man").style.display = "block";
        }
        if (distance == 70) {
            document.getElementById("track").style.marginLeft = "0%";
            clearInterval(interval);
        } else {
            document.getElementById("track").style.marginLeft = distance + "%";
            distance = distance + 2;
        }
    }, 100)
    document.getElementById("running-man").style.display = "none";
    document.getElementById("walking-man").style.display = "block";
}

window.onload = () => {
    document.getElementById("display-button").onclick = displayFunds;
    document.getElementById("walking-man").onclick = doTheRunningMan;
}