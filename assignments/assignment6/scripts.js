const moveSnail = () => {
    document.getElementById("snail").classList.add("move-snail");
}

const hideImage = () => {
    document.getElementById("togglable-img").style.display = "none";
}

const showImage = () => {
    document.getElementById("togglable-img").style.display = "block";
}


const sayHi = () => {
    alert("Hi!");
}

window.onload = () => {
    document.getElementById("hide-button").onclick = hideImage;
    document.getElementById("show-button").onclick = showImage;
    document.getElementById("move-button").onclick = moveSnail;
}