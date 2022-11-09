// Keep track of starting scores
let playerScore = 0;
let computerScore = 0;

// Get computer choice: random number between 0, 1, 2, then assign to rock, paper, or scissors
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    let random = array[Math.floor(Math.random() * 3)];
    return random;
}

let computerSelection = getComputerChoice();

console.log(computerSelection);

// Get player selection (case-insensitive)
function getPlayerChoice() {
    let playerInput = prompt("Rock, Paper, or Scissors?");
    if (playerInput.toLowerCase() == "rock") {
        return "Rock";
    } else if (playerInput.toLowerCase() == "paper") {
        return "Paper";
    } else if (playerInput.toLowerCase() == "scissors") {
        return "Scissors";
    } else {
        console.log('Invalid input. Please input "Rock," "Paper," or "Scissors"');
    }
}

let playerSelection = getPlayerChoice();

console.log(playerSelection);

// Play a single round of rock paper scissors
function playRound(computerSelection, playerSelection) {
    // console.log("Computer: " + computerSelection + ", Player: " + playerSelection);
     if (computerSelection == playerSelection) {
        return "Tie";
     } else if (computerSelection == "Rock") {
        if (playerSelection == "Paper") {
            playerScore++;
            return "Player wins";
        } else if (playerSelection == "Scissors") {
            computerScore++;
        }   return "Computer wins";
     } else if (computerSelection == "Paper") {
        if (playerSelection == "Rock") {
            computerScore++;
            return "Computer wins";
        } else if (playerSelection == "Scissors") {
            playerScore++;
            return "Player wins";
        }
     } else if (computerSelection == "Scissors") {
        if (playerSelection == "Rock") {
            playerScore++;
            return "Player wins";
        } else if (playerSelection == "Paper") {
            computerScore++;
            return "Computer wins";
        }
     }
}

// playRound(computerSelection, playerSelection);

// console.log(playerScore + "," + computerScore);


// Play 5 rounds of rock paper scissors
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(computerSelection, playerSelection);
        if (playRound() == "Tie") {
            console.log("Tie");
        } else if (playRound() == "Player wins") {
            console.log("Player wins");
        }
        console.log("Player: " + playerScore + ", Computer: " + computerScore);
        i++;
    }
}

game(computerSelection, playerSelection);





// Compare player to computer, determine and print winner
/* 
if (playerScore > computerScore) {
    console.log("Player wins!");
} else if (playerScore < computerScore) {
    console.log("Computer wins!");
} else {
    console.log("Tie!");
}
*/



