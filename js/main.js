// get start game button
const startButton = document.getElementById("button-start");
// get game grid
const gameGrid = document.getElementById("game-grid");
// get difficulty
const difficulty = document.getElementById("game-difficulty");
// is game over ?
let gameOver = false;
// difficulty value
let grid = 0;
// possible bomb spots
const bombSpots = [];
// bomb array
const bomb = [];
// total number of possible correct answers
let maxCorrectAnswer = 0;
// correct answer array
const correct = [];

// start button function

startButton.addEventListener("click", function () {
  gameGrid.innerHTML = "";
  bombSpots = [];
  bomb = [];
  correct = [];
  gameOver = false;
  grid = difficulty.value;
  maxCorrectAnswer = grid * grid - 16;
  // console.log(maxCorrectAnswer);
  bombSpots = generateNumericProgressiveArray(1, grid * grid, 1);
  bomb = bombPosition(16, bombSpots);
  gridGenerator(grid);

  // console.log("new bombspots " + bombSpots);
  // console.log(bomb);
});

// end game function

function endGame() {
  gameOver = true;
  if (maxCorrectAnswer == correct.length) {
    alert(
      "Congratulations, the game ended with " +
        correct.length +
        " correct cells out of " +
        maxCorrectAnswer +
        ", against 16 bombs!"
    );
  } else {
    alert(
      "Game over, your score is of " +
        correct.length +
        " correct cells out of " +
        maxCorrectAnswer +
        ", against 16 bombs!"
    );
  }
}

// post end game function

function postEndGame() {
  alert(
    "Press Start Game and choose difficulty to continue playing, may the odds always be in your favour"
  );
}

// function for generating grid

function gridGenerator(row) {
  for (let index = 1; index <= row * row; index++) {
    const cell = cellGenerator(index, row);
    gameGrid.append(cell);
  }
}

// function for generating cells

function cellGenerator(number, row) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.classList.add("cell-" + row);

  cell.innerHTML = number;

  cell.addEventListener("click", function () {
    if (gameOver) {
      postEndGame();
    } else if (bomb.includes(number)) {
      this.classList.add("boom");
      // console.log("boom baby");
      endGame();
    } else if (!correct.includes(number)) {
      this.classList.add("azure");
      correct.push(number);
      // console.log(correct);
      isWinner();
    }
  });

  return cell;
}

// function to check if the player won

function isWinner() {
  if (correct.length == maxCorrectAnswer) {
    // console.log("winner!");
    endGame();
  }
}

// function to know the position of bombs

function bombPosition(numberOfBombs, where) {
  const array = [];
  while (array.length < numberOfBombs) {
    const randomIndex = generateRandomNumber(1, where.length);
    array.push(where[randomIndex - 1]);
    where.splice(randomIndex - 1, 1);
  }
  return array;
}

// function to generate numeric progessive Array

function generateNumericProgressiveArray(from, to, step) {
  const array = [];
  for (let i = from; i <= to; i += step) {
    array.push(i);
  }
  return array;
  // console.log(where);
}

// function to generate random number

function generateRandomNumber(min, max) {
  let number = Math.floor(Math.random() * max) + min;
  // console.log(number);
  return number;
}
