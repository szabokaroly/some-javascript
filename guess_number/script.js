"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔️ No number!");
  } else if (guess === secretNum) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? " ⚡️ Too high!" : "🥃 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  displayScore(score);
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
});
