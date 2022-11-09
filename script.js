// Get computer choice: random number between 0, 1, 2, then assign to rock, paper, or scissors
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    let random = array[Math.floor(Math.random() * 3)];
    return random;
}

// Get player selection (case-insensitive)
function getPlayerChoice() {
    let playerInput;
    // Check that player input is correct   
    do {
        playerInput = prompt("Rock, Paper, or Scissors?");
    }
    while (playerInput != "rock" && playerInput != "paper" && playerInput != "scissors");

    if (playerInput.toLowerCase() == "rock") {
        return "rock";
    } else if (playerInput.toLowerCase() == "paper") {
        return "paper";
    } else if (playerInput.toLowerCase() == "scissors") {
        return "scissors";
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
            console.log("Paper wins");
        } else if (playerSelection == "scissors") {
            computerScore++;
            console.log("Rock wins");
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            computerScore++;
            console.log("Paper wins");
        } else if (playerSelection == "scissors") {
            playerScore++;
            console.log("Scissors wins");
        }
     } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            playerScore++;
            console.log("Rock wins");
        } else if (playerSelection == "paper") {
            computerScore++;
            console.log("Scissors wins");
        }
     }
}

// Play 5 rounds of rock paper scissors
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Computer: " + computerScore + ", Player: " + playerScore);
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



