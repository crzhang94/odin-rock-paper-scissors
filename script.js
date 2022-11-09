// Keep track of starting scores
let playerScore = 0;
let computerScore = 0;

// Get computer choice: random number between 0, 1, 2, then assign to rock, paper, or scissors
function getComputerChoice() {
    const array = ["Rock", "Paper", "Scissors"];
    let random = array[Math.floor(Math.random() * 3)];
    return random;
}

// Get player selection (case-insensitive)
let playerInput = prompt("Rock, Paper, or Scissors?");
if (playerInput.toLowerCase() == "rock") {
    var playerSelection = "Rock";
} else if (playerInput.toLowerCase() == "paper") {
    var playerSelection = "Paper";
} else if (playerInput.toLowerCase() == "scissors") {
    var playerSelection = "Scissors";
} else {
    console.log('Invalid input. Please input "Rock," "Paper," or "Scissors"');
}


// Play a single round of rock paper scissors
function playRound(computerSelection, playerSelection) {
    // console.log("Computer: " + computerSelection + ", Player: " + playerSelection);
     if (computerSelection == playerSelection) {
        console.log("Tie")
     } else if (computerSelection == "Rock") {
        if (playerSelection == "Paper") {
            playerScore++;
        } else if (playerSelection == "Scissors") {
            computerScore++;
        }
     } else if (computerSelection == "Paper") {
        if (playerSelection == "Rock") {
            computerScore++;
        } else if (playerSelection == "Scissors") {
            playerScore++;
        }
     } else {
        if (playerSelection == "Rock") {
            playerScore++;
        } else if (playerSelection == "Paper") {
            computerScore++
        }
     }
     return playerScore;
     return computerScore;
}

// Play 5 rounds of rock paper scissors
function game(computerSelection, playerSelection) {
    for (let i = 0; i < 5; i++) {
        playRound(computerSelection, playerSelection);
        console.log("Player: " + playerScore + ", Computer: " + computerScore);
        i++;
    }
}

game();


// Compare player to computer, determine and print winner
if (playerScore > computerScore) {
    console.log("Player wins!");
} else if (playerScore < computerScore) {
    console.log("Computer wins!");
} else {
    console.log("Tie!");
}



