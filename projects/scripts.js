let toggle = false;

const displayMenu = () => {
    if (toggle == true) {
        document.getElementById("main-nav").style.display = "none";
        toggle = false;
    } else if (toggle == false) {
        document.getElementById("main-nav").style.display = "grid";
        toggle = true;
    }
}

window.onload = () => {
    toggle = false;
    document.getElementById("burger").onclick = displayMenu;
}