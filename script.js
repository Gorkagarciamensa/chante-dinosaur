const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let gameOver = false;

function jump() {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

function playGame() {
  let isAlive = setInterval(function () {
    // get current dino Y position
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top")
    );

    // get current cactus X position
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );

    // detect collision
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      // collision
      alert("Pringaste con el chante!");
      gameOver = true;
    }
  }, 10);
}

document.addEventListener("keydown", function (event) {
  jump();
});

playGame()