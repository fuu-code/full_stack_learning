var numberDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var pressedButton = this.innerHTML;

    buttonSound(pressedButton);
    buttonAnimation(pressedButton);
  });
}
document.addEventListener("keypress", function (event) {
  buttonSound(event.key);
  buttonAnimation(event.key);
});

function buttonSound(buttonKey) {
  switch (buttonKey) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log("Unknown Error");
  }
}

function buttonAnimation(keyboardKey) {
  var currentButton = document.querySelector("." + keyboardKey);

  if (!currentButton) return;
  currentButton.classList.add("pressed");
  function removeAnimation() {
    currentButton.classList.remove("pressed");
  }
  setTimeout(removeAnimation, 100);
}
