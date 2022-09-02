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
}

// The startGame function is called when the start button is clicked
function startGame() {
  // update the timerCount variable to how long you want the user to play the round for
  // fire the renderBlanks function so we can see the blanks of the chosen word from the words array
  // fire the startTimer function to start the round
}

// The winGame function is called when the win condition is met
function winGame() {
  // this function lets the user know that you won that round by updating the DOM
  // update the winCounter by one
  // fire the setWins function
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  // this function lets the user know that you lost that round by updating the DOM
  // update the loseCounter by one
  // fire the setLosses function
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // create an interval that counts down a timerCount variable and updates the timerElement to show the time decrementing
  // create a conditional here that checks you have any time left and if so check to see if isWin condition is met and you still have time left
  // if that condition is true then clear the interval and fire the winGame function
  // However, if the timerCount is equal to 0 then clear the interval and fire the loseGame function
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
  // update the localStorage to track the "winCount"
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
  // update the lose textContent with the loseCounter
  // update the localStorage to track the "loseCount"
}

// These functions are used by init
function getWins() {
  // get the winCount from localStorage
  // check to see if it has a value and if it doesn't update the winCounter to zero
  // else set the winCounter variable to equal the value from localStorage
  // render the win count to the page
}
function getlosses() {
  // get the loseCount from localStorage
  // check to see if it has a value and if it doesn't update the loseCounter to zero
  // else set the loseCounter variable to equal the value from localStorage
  // render the lose count to the page
}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true
  // This value is used in the timer function to test if win condition is met
}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
  // you need two for loops here.  One to check to see if the letter is in the word
  // and another to update the blankLetters array with the letter in place of the underscore
  // once updated update the wordBlank textContent with a string version of the blankLetters array
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function (event) {
  // need to check to see if the timerCount is at zero and if it is just return out of the function so the user can't guess anymore
  
  // to create an even set of letter to match in your words array it's a good idea to take all the keys the user fires in the keydown even and set them to a variable that sets the key toLowerCase().
  // then create a variable that takes all the letters of the alphabet and performs a split on it.  This will create an array of alphabet numbers that you can use to ensure it's the only letter we pass to the checkLetters() function.  
  // after we fire the checkLetters() function we fire the checkWin() function to see if we won or not. 
});

// TODO:Attach event listener to start button to call startGame function on click

// Calls init() so that it fires when page opened
init();

// BONUS: Target the reset button class and assign to a variable

// BONUS: Resets wins and loses counter variables to zero and renders win loss counts via those two functions
function resetGame() {}

// BONUS: Attach event listener to the reset button and fire the resetGame function
