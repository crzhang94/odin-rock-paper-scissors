// Get computer choice: random number between 0, 1, 2
function getComputerChoice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min );
}

// Get computer choice: assign random number to rock, paper, or scissors
var computerNumber = getComputerChoice(0, 2)
if (computerNumber = 0) {
    var computerSelection = "Rock";
} else if (computerNumber = 1) {
    var computerSelection = "Paper";
} else {
    var computerSelection = "Scissors";
}

// Get player selection (case-insensitive)
var playerInput = prompt("Rock, Paper, or Scissors?");
if (playerInput.toLowerCase() == "rock") {
    var playerSelection = "Rock";
} else if (playerInput.toLowerCase() == "paper") {
    var playerSelection = "Paper";
} else if (playerInput.toLowerCase() == "scissors") {
    var playerSelection = "Scissors";
} else {
    console.log('Invalid input. Please input "Rock," "Paper," or "Scissors"');
}


// function playRound
// Play a single round of rock paper scissors

// playerSelection
// computerSelection
// Compare player to computer, determine winner
// Print winner





