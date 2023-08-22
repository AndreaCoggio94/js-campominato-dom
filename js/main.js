// get start game button
const startButton = document.getElementById("button-start");
// get game grid
const gameGrid = document.getElementById("game-grid");
// get difficulty
const difficulty = document.getElementById("game-difficulty");
// possible bomb spots
let bombSpots = [];
// bomb array
let bomb = [];

// start button functionality

startButton.addEventListener("click", function () {
  gameGrid.innerHTML = "";
  let grid = difficulty.value;
  generateNumericProgressiveArray(1, grid * grid, 1, bombSpots);
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
  console.log(where);
}

// function to generate random number

function generateRandomNumber(min, max) {
  let number = Math.floor(Math.random() * max) + min;
  console.log(number);
}
