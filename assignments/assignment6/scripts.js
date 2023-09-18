const moveSnail = () => {
    document.getElementById("snail").classList.add("move-sail");
}



window.onload = () => {
    document.getElementById("move-button").onclick = moveSnail;
}