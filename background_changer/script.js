const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["green", "blue", "yellow", "orange", "red", "pink", "purple", "teal", "brown", "black"]

body.style.backgroundColor = "white"
button.addEventListener("click", changeBackground)

function changeBackground () {
    const colorIndex = parseInt(Math.random() * colors.length+1);
    body.style.backgroundColor = colors[colorIndex];
}