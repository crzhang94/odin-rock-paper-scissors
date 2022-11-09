// Get computer choice: random number between 0, 1, 2, then assign to rock, paper, or scissors
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    let random = array[Math.floor(Math.random() * 3)];
    return random;
}

// Get player selection (case-insensitive)
function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper, or Scissors?");
    if (playerInput.toLowerCase() == "rock") {
        return "rock";
    } else if (playerInput.toLowerCase() == "paper") {
        return "paper";
    } else if (playerInput.toLowerCase() == "scissors") {
        return "scissors";
    } else {
        console.log('Invalid input. Please input "Rock," "Paper," or "Scissors"');
    }
}

// Keep track of starting scores
let playerScore = 0;
let computerScore = 0;

// Play a single round of rock paper scissors
function playRound() {
    // Get new selections at the start of the round
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    console.log("Computer: " + computerSelection + ", Player: " + playerSelection);

     if (computerSelection == playerSelection) {
        console.log("Tie");
     } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            playerScore++;
            console.log("Player wins");
        } else if (playerSelection == "scissors") {
            computerScore++;
        }   console.log("Computer wins");
     } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            computerScore++;
            console.log("Computer wins");
        } else if (playerSelection == "scissors") {
            playerScore++;
            console.log("Player wins");
        }
     } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            playerScore++;
            console.log("Player wins");
        } else if (playerSelection == "paper") {
            computerScore++;
            console.log("Computer wins");
        }
     }
}

// Play 5 rounds of rock paper scissors
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        /*if (playRound() == "Tie") {
            console.log("Tie");
        } else if (playRound() == "Player wins") {
            console.log("Player wins");
        } else if (playRound() == "Computer wins") {
            console.log("Computer wins");
        } */
        // console.log("Player: " + playerScore + ", Computer: " + computerScore); 
        console.log("Computer: " + computerScore + ", Player: " + playerScore);
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



