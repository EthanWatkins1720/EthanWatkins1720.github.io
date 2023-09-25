let toggle = true;

const showExercise1 = () => {
    document.getElementById("main-2").style.display = "none";
    document.getElementById("main-1").style.display = "block";
    document.getElementById("exercise-1").style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,255,255,1) 30%)";
    document.getElementById("exercise-2").style.background = "none";
    document.getElementById("exercise-2").style.backgroundColor = "white";
}

const showExercise2 = () => {
    document.getElementById("main-1").style.display = "none";
    document.getElementById("main-2").style.display = "block";
    document.getElementById("exercise-1").style.background = "none";
    document.getElementById("exercise-1").style.backgroundColor = "white";
    document.getElementById("exercise-2").style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,255,255,1) 30%)";
}

const displayMenu = () => {
    if (toggle == true) {
        document.getElementById("exercise-1").style.display = "none";
        document.getElementById("exercise-2").style.display = "none";
        toggle = false;
    } else if (toggle == false) {
        document.getElementById("exercise-1").style.display = "block";
        document.getElementById("exercise-2").style.display = "block";
        toggle = true;
    }
}

const compareAge = () => {
    const name1 = document.getElementById("name-1").value;
    const name2 = document.getElementById("name-2").value;
    const name3 = document.getElementById("name-3").value;
    const age1 = parseInt(document.getElementById("age-1").value);
    const age2 = parseInt(document.getElementById("age-2").value);
    const age3 = parseInt(document.getElementById("age-3").value);
    const orderedOutput = document.getElementById("output");
    
    if (!name1 || !name2 || !name3 || isNaN(age1) || isNaN(age2) || isNaN(age3)) {
        orderedOutput.innerHTML = "Invalid input";
    }

    if (age1 > age2 && age2 > age3) {
        orderedOutput.innerHTML = `${name1},${name2},${name3}`;
    }
    if (age1 > age3 && age3 > age2) {
        orderedOutput.innerHTML = `${name1},${name3},${name2}`;
    }
    if (age2 > age1 && age1 > age3) {
        orderedOutput.innerHTML = `${name2},${name1},${name3}`;
    }
    if (age2 > age1 && age3 > age1) {
        orderedOutput.innerHTML = `${name2},${name3},${name1}`;
    }
    if (age3 > age2 && age2 > age1) {
        orderedOutput.innerHTML = `${name3},${name2},${name1}`;
    }
    if (age3 > age1 && age1 > age2) {
        orderedOutput.innerHTML = `${name3},${name1},${name2}`;
    }

    if (age1 == age2 && age2 > age3) {
        orderedOutput.innerHTML = `${name1},${name2},${name3}`;
    }
    if (age1 > age2 && age2 == age3) {
        orderedOutput.innerHTML = `${name1},${name2},${name3}`;
    }
    if (age2 == age1 && age1 > age3) {
        orderedOutput.innerHTML = `${name2},${name1},${name3}`;
    }
    if (age2 > age1 && age3 == age1) {
        orderedOutput.innerHTML = `${name2},${name3},${name1}`;
    }
    if (age3 == age2 && age2 > age1) {
        orderedOutput.innerHTML = `${name3},${name2},${name1}`;
    }
    if (age3 > age1 && age1 == age2) {
        orderedOutput.innerHTML = `${name3},${name1},${name2}`;
    }


}

const displayFunds = () => {
    const fundsAmount = parseInt(document.getElementById("funds").value);
    if (fundsAmount < 2500) {
        document.getElementById("thermometer").style.background = "white";
    }
    if (fundsAmount >= 2500) {
        document.getElementById("thermometer").style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,255,255,1) 30%)";
    }
    if (fundsAmount >= 5000) {
        document.getElementById("thermometer").style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,255,255,1) 60%)";
    }
    if (fundsAmount >= 7500) {
        document.getElementById("thermometer").style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,255,255,1) 80%)";
    }
    if (fundsAmount >= 10000) {
        document.getElementById("thermometer").style.background = "linear-gradient(0deg, rgba(255,0,0,1) 0%, rgba(255,255,255,1) 100%)";
    }
}

window.onload = () => {
    toggle = true;
    document.getElementById("exercise-1").onclick = showExercise1;
    document.getElementById("exercise-2").onclick = showExercise2;
    document.getElementById("age-button").onclick = compareAge;
    document.getElementById("display-button").onclick = displayFunds;
    document.getElementById("burger").onclick = displayMenu;
}