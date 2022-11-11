// Keep track of starting scores
let playerScore = 0;
let computerScore = 0;

// DOM Elements
// const buttons = document.querySelector('.buttons')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const results = document.querySelector('.results');
const roundWinner = document.querySelector('.round-winner');
const pScore= document.querySelector('#player-score');
const cScore= document.querySelector('#computer-score');
const finalWinner = document.querySelector('.final-winner');


// Get random computer choice
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    let random = array[Math.floor(Math.random() * 3)];
    return random;
}

// Start a round when player hits a button selection
rock.addEventListener('click', () => {
    playRound("rock");
    endGame();
});

paper.addEventListener('click', () => {
    playRound("paper");
    endGame();
});

scissors.addEventListener('click', () => {
    playRound("scissors");
    endGame();
});

// Play a single round of rock paper scissors using button input as player selection
function playRound(playerSelection) {
    // Get new computer selection at the start of the round
    let computerSelection = getComputerChoice();

    // Show player and computer selection for the round 
    results.textContent = "Computer: " + computerSelection + ", Player: " + playerSelection;

    // Show which selection won the round 
     if (computerSelection == playerSelection) {
        roundWinner.textContent = "Tie";
     } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            playerScore++;
            roundWinner.textContent = "Paper wins";
        } else if (playerSelection == "scissors") {
            computerScore++;
            roundWinner.textContent = "Rock wins";
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            computerScore++;
            roundWinner.textContent = "Paper wins";
        } else if (playerSelection == "scissors") {
            playerScore++;
            roundWinner.textContent = "Scissors wins";
        }
     } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            playerScore++;
            roundWinner.textContent = "Rock wins";
        } else if (playerSelection == "paper") {
            computerScore++;
            roundWinner.textContent = "Scissors wins";
        }
     } 

     // Keep track of running scores
     pScore.textContent = "Player: " + playerScore;
     cScore.textContent = "Computer: " + computerScore;

}

// Notify of winner when someone reaches 5 points
function endGame() {
    if (playerScore >= 5) {
        finalWinner.textContent = "Congrats! You win.";
        restartGame();
    } else if (computerScore >= 5) {
        finalWinner.textContent = "Game over! You lost.";
        restartGame();
    }
}

// Reload and restart game when winner is determined
function restartGame() {
    location.reload();
}