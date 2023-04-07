var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = [
  "variable",
  "array",
  "modulus",
  "object",
  "function",
  "string",
  "boolean",
];

// The init function is called when the page loads
function init() {
  // fire the getWins and getlosses functions here
  getWins();
  getLosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
  isWin = false;
  // update the timerCount variable to how long you want the user to play the round for
  timerCount = 20;
  // Prevents start buttom from being clicked when round is in progress
  startButton.disabled = true;
  // fire the renderBlanks function so we can see the blanks of the chosen word from the words array
  renderBlanks();
  // fire the startTimer function to start the round
  startTimer();
}

// The winGame function is called when the win condition is met
function winGame() {
  // this function lets the user know that you won that round by updating the DOM
  wordBlank.textContent = "You Won!";
  // update the winCounter by one
  winCounter++;
  // Allows the start button to be clicked since the round is over
  startButton.disabled = false;
  // fire the setWins function
  setWins();
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  // this function lets the user know that you lost that round by updating the DOM
  wordBlank.textContent = "Game Over!";
  // update the loseCounter by one
  loseCounter++;
  // Allows the start button to be clicked since the round is over
  startButton.disabled = false;
  // fire the setLosses function
  setLosses();
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // create an interval that counts down a timerCount variable and updates the timerElement to show the time decrementing
  var timeInterval = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    // create a conditional here that checks you have any time left and if so check to see if isWin condition is met and you still have time left
    if (timerCount >= 0) {
      if (isWin && timerCount > 0) {
        // if that condition is true then clear the interval and fire the winGame function
        clearInterval(timeInterval);
        winGame();
      }
    }
    // However, if the timerCount is equal to 0 then clear the interval and fire the loseGame function
    if (timerCount === 0) {
      clearInterval(timeInterval);
      loseGame();
    }
  }, 1000);
}

// Creates blanks on screen
// I provided this for you due to time constraints but review so you can figure out how it's rendering the blank underscores on the page
function renderBlanks() {
  // Randomly picks word from words array
  chosenWord = words[Math.floor(Math.random() * words.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  blanksLetters = [];
  // Uses loop to push blanks to blankLetters array
  for (var i = 0; i < numBlanks; i++) {
    blanksLetters.push("_");
  }
  // Converts blankLetters array into a string and renders it on the screen
  wordBlank.textContent = blanksLetters.join(" ");
}

// Updates win count on screen and sets win count to client storage
function setWins() {
  // update the win textContent with the winCounter
  win.textContent = winCounter;
  // update the localStorage to track the "winCount"
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  // update the lose textContent with the loseCounter
  lose.textContent = loseCounter;
  // update the localStorage to track the "loseCount"
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // get the winCount from localStorage
  var savedWins = localStorage.getItem("winCount");
  // check to see if it has a value and if it doesn't update the winCounter to zero
  if (savedWins === null) {
    winCounter === 0;
    // else set the winCounter variable to equal the value from localStorage
  } else {
    winCounter === savedWins;
  }
  // render the win count to the page
  win.textContent = savedWins;
}
function getLosses() {
  // get the loseCount from localStorage
  var loseTotal = localStorage.getItem("loseCount");
  // check to see if it has a value and if it doesn't update the loseCounter to zero
  if (loseTotal === null) {
    loseCounter === 0;
    // else set the loseCounter variable to equal the value from localStorage
  } else {
    loseCounter === loseTotal;
  }
  // render the lose count to the page
  lose.textContent = loseTotal;
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  if (chosenWord === blanksLetters.join("")) {
    // This value is used in the timer function to test if win condition is met
    isWin === true;
  }
}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  var guessedLetter = false;
  // you need two for loops here.  One to check to see if the letter is in the word
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      guessedLetter = true;
    }
  }
  // and another to update the blankLetters array with the letter in place of the underscore
  if (guessedLetter) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksLetters[j] = letter;
      }
    }
  }
  // once updated update the wordBlank textContent with a string version of the blankLetters array
  wordBlank.textContent = blanksLetters.join("");
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function (event) {
  // need to check to see if the timerCount is at zero and if it is just return out of the function so the user can't guess anymore
  if (timerCount === 0) {
    return;
  }
  // to create an even set of letter to match in your words array it's a good idea to take all the keys the user fires in the keydown event and set them to a variable that sets the key toLowerCase().
  var key = event.key.toLowerCase();
  // then create a variable that takes all the letters of the alphabet and performs a split on it.  This will create an array of alphabet numbers that you can use to ensure it's the only letter we pass to the checkLetters() function.
  var alphaNumChar = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
  // Test if key pushed is letter.
  if (alphaNumChar.includes(key)) {
    var guessedLetter = event.key;
  }
  // after we fire the checkLetters() function we fire the checkWin() function to see if we won or not.
  checkLetters(guessedLetter);
  checkWin();
});

// TODO:Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// BONUS: Target the reset button class and assign to a variable
var resetButton = document.querySelector(".reset-button");

// BONUS: Resets wins and loses counter variables to zero and renders win loss counts via those two functions
function resetGame() {
  winCounter = 0;
  loseCounter = 0;
  setWins();
  setLosses();
}

// BONUS: Attach event listener to the reset button and fire the resetGame function
resetButton.addEventListener("click", resetGame);
