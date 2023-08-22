// get start game button
const startButton = document.getElementById("button-start");
// get game grid
const gameGrid = document.getElementById("game-grid");
// get difficulty
const difficulty = document.getElementById("game-difficulty");

// start button functionality

startButton.addEventListener("click", function () {
  gameGrid.innerHTML = "";
  let grid = difficulty.value;
  gridGenerator(grid);
});

// function for generating grid

function gridGenerator(max) {
  for (let index = 1; index <= max * max; index++) {
    gameGrid.append(cellGenerator(index, max));
  }
}

// function for generating cells

function cellGenerator(number, grid) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.classList.add("cell-" + grid);
  cell.innerHTML = number;

  cell.addEventListener("click", function () {
    this.classList.add("azure");
    console.log(number);
  });

  return cell;
}

// function to generate numeric progessive Array

function generateNumericProgressiveArray(from, to, step, where) {
  for (let i = from; i <= to; i += step) {
    where.push(i);
  }
}
