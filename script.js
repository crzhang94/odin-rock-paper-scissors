// Keep track of starting scores
let playerScore = 0;
let computerScore = 0;

// DOM Elements
const buttons = document.querySelector('.buttons')
const results = document.querySelector('.results');
const roundWinner = document.querySelector('.round-winner');
const pScore= document.querySelector('#player-score');
const cScore= document.querySelector('#computer-score');


// Get random computer choice
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    let random = array[Math.floor(Math.random() * 3)];
    return random;
}

// Start a round when player hits a button selection
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("rock");
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound("paper");
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound("scissors");
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

    endGame();

}

// Popup alert to notify of game results when someone reaches 5 points
function endGame() {
    if (playerScore >= 5) {
        alert("Congrats! You win.");
    } else if (computerScore >= 5) {
        alert("Game over! You lost.");
    }
}
