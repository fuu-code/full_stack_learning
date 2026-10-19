// function playSound(name) {
// switch (name) {
//   case "yellow":
//     var soundEffectYellow = new Audio("sounds/yellow.mp3");
//     soundEffectYellow.volume = 0.2;
//     soundEffectYellow.play();
//     break;

//   case "green":
//     var soundEffectGreen = new Audio("sounds/green.mp3");
//     soundEffectGreen.volume = 0.2;
//     soundEffectGreen.play();
//     break;

//   case "blue":
//     var soundEffectRed = new Audio("sounds/red.mp3");
//     soundEffectRed.volume = 0.2;
//     soundEffectRed.play();
//     break;

//   case "red":
//     var soundEffectBlue = new Audio("sounds/blue.mp3");
//     soundEffectBlue.volume = 0.2;
//     soundEffectBlue.play();
//     break;

//   default:
//     var soundEffectWrong = new Audio("sounds/wrong.mp3");
//     soundEffectWrong.volume = 0.2;
//     soundEffectWrong.play();
// }}

function playSound(name) {
  var soundEffect = new Audio("sounds/" + name + ".mp3");
  soundEffect.volume = 0.2;
  soundEffect.play();
}

function animateButton(id) {
  $("#" + id).addClass("button-pressed-animation");

  setTimeout(function () {
    $("#" + id).removeClass("button-pressed-animation");
  }, 100);
}

////////////////////////////////////////////////////////////////////////////////////////
// GAME FUNCTION ///////////////////

var buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;
var userClickedPattern = [];
var gamePattern = [];
var started = false;
var playerTurn = false;

function nextSequence() {
  level++;

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColors = buttonColors[randomNumber];
  gamePattern.push(randomChosenColors);

  $("h1").text("Level " + level);

  playSequence();

  // console.log(gamePattern);
}

$(".btn").on("click", function () {
  if (!started || !playerTurn) {
    return;
  }

  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);

  var currentIndex = userClickedPattern.length - 1;

  checkAnswer(currentIndex);
  // console.log(userClickedPattern);
  var elementId = this.id;
  animateButton(elementId);
  playSound(elementId);
});

$(document).on("keypress", function () {
  if (!started) {
    started = true;
    nextSequence();
  }
});

function checkAnswer(currentIndex) {
  if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {
    console.log("Correct");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        userClickedPattern = [];
        nextSequence();
      }, 1000);
    }
  } else {
    startOver();
    $("h1").text("Game Over, Press Any Key to Restart");
    $(document).style.backgroundColor = "red";
    setTimeout(function () {
      $(document).style.backgroundColor = "#011F3F"; // original color
    }, 100);
  }
}

function playSequence() {
  playerTurn = false;

  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      animateButton(gamePattern[i]);
      playSound(gamePattern[i]);
    }, i * 600);
  }

  setTimeout(function () {
    playerTurn = true;
  }, gamePattern.length * 600);
}

function startOver() {
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
}
