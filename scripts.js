const ShowAssignment = () => {
    document.getElementById("assignment-row-1").style.display = "block";
    document.getElementById("assignment-row-2").style.display = "block";
    document.getElementById("project-row-1").style.display = "none";
}

const ShowProject = () => {
    document.getElementById("assignment-row-1").style.display = "none";
    document.getElementById("assignment-row-2").style.display = "none";
    document.getElementById("project-row-1").style.display = "block";
}

window.onload = () => {
    document.getElementById("assignment-button").onclick = ShowAssignment;
    document.getElementById("project-button").onclick = ShowProject;
}