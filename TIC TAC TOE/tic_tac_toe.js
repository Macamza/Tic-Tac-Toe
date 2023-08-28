let currentPlayer = "X";
const cells = document.querySelectorAll(".cell");

function makeMove(cellIndex) {
  if (!cells[cellIndex].textContent) {
    cells[cellIndex].textContent = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + " wins!");
      resetGame();
    } else if ([...cells].every(cell => cell.textContent !== "")) {
      alert("It's a draw!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  cells.forEach(cell => cell.textContent = "");
  currentPlayer = "X";
}
