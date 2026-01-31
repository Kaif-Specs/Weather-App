let gameSeq = [];
let userSeq = [];

let colors = ["red", "green", "blue", "yellow"];
let started = false;
let level = 0;

document.addEventListener("keydown", function () {
  if (!started) {
    started = true;
    nextLevel();
  }
});

function nextLevel() {
  userSeq = [];
  level++;
  document.getElementById("level").innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = colors[randIdx];
  gameSeq.push(randColor);

  flashBtn(randColor);
}

function flashBtn(color) {
  let btn = document.getElementById(color);
  btn.classList.add("flash");

  setTimeout(() => {
    btn.classList.remove("flash");
  }, 300);
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function () {
    let color = btn.id;
    userSeq.push(color);
    checkAnswer(userSeq.length - 1);
  });
});

function checkAnswer(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(nextLevel, 1000);
    }
  } else {
    document.getElementById("level").innerText = "Game Over! Press any key to restart";
    resetGame();
  }
}

function resetGame() {
  started = false;
  gameSeq = [];
  level = 0;
}
