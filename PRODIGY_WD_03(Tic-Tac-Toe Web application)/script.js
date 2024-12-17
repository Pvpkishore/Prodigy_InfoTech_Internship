var gameBoard = document.getElementById("gameBoard");
var statusText = document.getElementById("status");
var resetButton = document.getElementById("resetBtn");
var boardCells = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var gameActive = true;

// Winning combinations
var winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], 
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]
];

function createBoard() {
  gameBoard.innerHTML = "";
  boardCells.forEach(function(_, index) {
    var cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = index;
    gameBoard.appendChild(cell);
  });
}

function handleCellClick(event) {
  var clickedCell = event.target;
  var cellIndex = clickedCell.dataset.index;

  if (boardCells[cellIndex] !== "" || !gameActive) return;

  updateCell(clickedCell, cellIndex);
  checkResult();

  if (gameActive) {
    switchPlayer();
    if (currentPlayer === "O") {
      setTimeout(aiMove, 500);
    }
  }
}

function updateCell(cell, index) {
  boardCells[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer, "taken");
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = "Player " + currentPlayer + "'s turn";
}

function aiMove() {
  var emptyCells = boardCells
    .map(function(value, index) {
      return value === "" ? index : null;
    })
    .filter(function(index) {
      return index !== null;
    });

  if (emptyCells.length > 0) {
    var randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    var cell = document.querySelector('.cell[data-index="' + randomIndex + '"]');
    updateCell(cell, randomIndex);
    checkResult();
    if (gameActive) switchPlayer();
  }
}

function checkResult() {
  var roundWon = false;

  for (var i = 0; i < winningConditions.length; i++) {
    var condition = winningConditions[i];
    var a = condition[0], b = condition[1], c = condition[2];
    if (boardCells[a] && boardCells[a] === boardCells[b] && boardCells[a] === boardCells[c]) {
      roundWon = true;
      highlightWinningCells([a, b, c]);
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = "Player " + currentPlayer + " Wins! 🎉";
    gameActive = false;
  } else if (!boardCells.includes("")) {
    statusText.textContent = "It's a Draw! 🤝";
    gameActive = false;
  }
}

function highlightWinningCells(indices) {
  indices.forEach(function(index) {
    var cell = document.querySelector('.cell[data-index="' + index + '"]');
    cell.classList.add("winning");
  });
}

function resetGame() {
  boardCells = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = "Player X's turn";
  createBoard();
}

gameBoard.addEventListener("click", handleCellClick);
resetButton.addEventListener("click", resetGame);

createBoard();
