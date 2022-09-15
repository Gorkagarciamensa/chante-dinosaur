const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const chanted = document.getElementsByClassName("chanted-hahaha")[0];

let gameOver = false;
let imgs = [];
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    playAgain();
  }
};

document.addEventListener("keydown", function (event) {
  jump();
});

span.onclick = () => {
  playAgain();
};

function jump() {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

function playGame() {
  gameOver = false;
  imgs = [];
  cactus.style.animation = "block 0.5s infinite linear";
  let isAlive = setInterval(function () {
    if (gameOver) {
      clearInterval(isAlive);
    }
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
      // collision;
      modal.style.display = "block";

      cactus.style.animation = "";
      putRandomChantsHaha();
      gameOver = true;
    }
  }, 5);
}

function putRandomChantsHaha() {
  let randomIndex = random(200) * 3;
  if (randomIndex > 400) randomIndex = 200;

  for (let i = 0; i < randomIndex; i++) {
    const img = document.createElement("img");
    const randomWidthHeight = random(120);
    const randomTop = random(window.innerHeight);
    const randomBottom = random(window.innerHeight);
    const randomLeft = random(window.innerWidth);
    const randomRight = random(window.innerWidth);
    const zIndex = random(100);

    img.width = randomWidthHeight;
    img.height = randomWidthHeight;
    img.src = "assets/chante.jpg";
    img.style.position = "absolute";
    img.style.top = `${randomTop}px`;
    img.style.bottom = `${randomBottom}px`;
    img.style.left = `${randomLeft}px`;
    img.style.right = `${randomRight}px`;
    img.style.zIndex = `${zIndex}`;

    imgs.push(img);
    chanted.appendChild(img);
  }
  modal.style.zIndex = "1000";
}

function random(number) {
  return Math.floor(Math.random() * number) + 1;
}

function playAgain() {
  modal.style.display = "none";
  for (const img of imgs) {
    chanted.removeChild(img);
  }
  playGame();
}

playGame();
