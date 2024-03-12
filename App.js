let boxes = document.querySelectorAll(".box");
let resetBox = document.querySelector(".reset-btn");
let winnerResult = document.querySelector(".winnerResult");
let count = 0;

let playerO = true;

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO == true) {
      count++;
      box.innerHTML = "O";
      playerO = false;
    } else {
      box.innerHTML = "X";
      count++;
      playerO = true;
    }
    box.disabled = true;
    if (count > 8) {
      winnerResult.innerHTML = `Match Draw.`
      winnerResult.style.display = "block";
    }

    checkWinner();
  });
});

const checkWinner = () => {
  for (const pattern of winningPattern) {
    let pos1Box = boxes[pattern[0]].innerText;
    let pos2Box = boxes[pattern[1]].innerText;
    let pos3Box = boxes[pattern[2]].innerText;

    if (pos1Box != "" && pos2Box != "" && pos3Box != "") {
      if (pos1Box === pos2Box && pos2Box === pos3Box) {
          winnerResult.innerHTML = `Player "${pos1Box}" Won the game.`;
          winnerResult.style.display = "block";  
        boxes.forEach((box) => {
          box.disabled = true;
        });
      }
    }
  }
};

const resetGame = document.querySelector("#reset-btn");
resetGame.addEventListener("click", () => {
  playerO = true;
  winnerResult.innerHTML = ``;
  winnerResult.style.display = "none";
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
});
