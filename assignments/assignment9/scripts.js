const quotes = [
"\"No, I am your father.\" - Darth Vader", 
"\"I have been — and always shall be — your friend.\" - Spock",
"\"You can't keep using the TARDIS like this.\" - Eleventh Doctor",
"\"Your drill is the drill that will pierce the Heavens!\" - Kamina",
"\"Where others have failed, I will not fail.\" - Captain Nemo"
]

let count = 1;

const quoteCycle = () => {
    document.getElementById("output9-1").innerHTML = quotes[count];
    if (count == 4) {
        count = 0;
    } else {
        count++;
    }
}

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

let i = 0;

const stripeColor = (colorNum) => {
    setTimeout(() => {
        document.getElementById("color" + colorNum).style.backgroundColor = colors[colorNum];
    }, 2000)
}

const rainbowMaker = () => {
    stripeColor(i);
    i++;
    if (i < colors.length) {
        setTimeout(rainbowMaker, 2000);
    }
    if (i == 6) {
        document.getElementById("gold").style.display = "block";
    }
    
}
window.onload = () => {
    document.getElementById("output9-1").innerHTML = quotes[0];
    document.getElementById("rainbow-button").onclick = rainbowMaker;
    setInterval(quoteCycle,2000);
}