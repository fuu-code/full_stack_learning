var randomNumber1 = Math.round(Math.random() * 5 + 1);
var randomNumber2 = Math.round(Math.random() * 5 + 1);

document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

function result() {
  if (randomNumber1 > randomNumber2) {
    console.log("Player 1 Won");
    document.querySelector("h1").textContent = "🚩Player 1 Won";
  } else if (randomNumber1 < randomNumber2) {
    console.log("Player 2 Won");
    document.querySelector("h1").textContent = "Player 2 Won🚩";
  } else {
    console.log("Draw");
    document.querySelector("h1").textContent = "Draw";
  }
}
result();
