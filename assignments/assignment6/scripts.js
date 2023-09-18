const moveSnail = () => {
    document.getElementById("snail").classList.add("move-snail");
}

const hideImage = () => {
    document.getElementById("togglable-img").style.display = "none";
}

const showImage = () => {
    document.getElementById("togglable-img").style.display = "block";
}

const displayComment = () => {
    const fin = document.createElement("div");
    const proName = document.getElementById("product-name").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;
    const username = document.getElementById("username").value;
    fin.classList.add("output");
    fin.appendChild(proName);
    fin.appendChild(document.createElement("br"));
    fin.appendChild(rating);
    fin.appendChild("/5 	&#11088; " + comment);
    fin.appendChild(document.createElement("br"));
    fin.appendChild("By: " + username);
    document.getElementById("final-comment").appendChild(fin);
}

const generateTable = () => {

}

const sayHi = () => {
    alert("Hi!");
}

window.onload = () => {
    document.getElementById("hide-button").onclick = hideImage;
    document.getElementById("show-button").onclick = showImage;
    document.getElementById("move-button").onclick = moveSnail;
    document.getElementById("comment-button").onclick = displayComment;
}