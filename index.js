
for (i = 0; i < document.querySelectorAll(".drum").length; i++){

document.querySelectorAll('button')[i].addEventListener("click", handleClick);

let tom1 = new Audio("sounds/tom-1.mp3");

function handleClick() {
tom1.play()
}
}
