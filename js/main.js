// get start game button
const startButton = document.getElementById("button-start");
// get game grid
const gameGrid = document.getElementById("game-grid");
// get difficulty
const difficulty = document.getElementById("game-difficulty");
// get choosen grid
let grid = difficulty.value;

// start button functionality

startButton.addEventListener("click", function () {
  gameGrid.innerHTML = "";
  grid = difficulty.value;
  gridGenerator();
});

// function for generating grid

function gridGenerator() {
  for (let index = 1; index <= grid * grid; index++) {
    gameGrid.append(cellGenerator(index, grid));
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
