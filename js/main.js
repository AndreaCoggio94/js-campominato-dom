// get start game button
const startButton = document.getElementById("button-start");
// get game grid
const gameGrid = document.getElementById("game-grid");
// get difficulty
const difficulty = document.getElementById("game-difficulty");
// get class
const getClass = document.getElementsByClassName;
// difficulty value
let grid = 0;
// possible bomb spots
let bombSpots = [];
// bomb array
let bomb = [];
// total number of possible correct answers
let maxCorrectAnswer = 0;
// correct answer array
let correct = [];

// start button function

startButton.addEventListener("click", function () {
  gameGrid.innerHTML = "";
  bombSpots = [];
  bomb = [];
  correct = [];
  grid = difficulty.value;
  maxCorrectAnswer = grid * grid - 16;
  console.log(maxCorrectAnswer);
  generateNumericProgressiveArray(1, grid * grid, 1, bombSpots);
  bombPosition(16, bombSpots);
  gridGenerator(grid);

  console.log("new bombspots " + bombSpots);
  console.log(bomb);
});

// end game function

function endGame() {
  if (maxCorrectAnswer == correct.length) {
    alert(
      "Congratulations, the game ended with " +
        correct.length +
        " correct cells against 16 bombs!"
    );
  } else {
    alert(
      "Game over, your score is of " +
        correct.length +
        " correct cells against 16 bombs!"
    );
  }
}

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
    if (bomb.includes(number)) {
      this.classList.add("boom");
      console.log("boom baby");
      return endGame();
    }

    if (!correct.includes(number)) {
      this.classList.add("azure");
      correct.push(number);
      console.log(correct);
      isWinner();
    }
  });

  return cell;
}

// function to check if the player won

function isWinner() {
  if (correct.length == maxCorrectAnswer) {
    console.log("winner!");
    return endGame();
  }
}

// function to know the position of bombs

function bombPosition(numberOfBombs, where) {
  while (bomb.length < numberOfBombs) {
    const randomIndex = generateRandomNumber(1, bombSpots.length);
    bomb.push(where[randomIndex - 1]);
    where.splice(randomIndex - 1, 1);
  }
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
  return number;
}
