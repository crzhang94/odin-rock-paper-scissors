// Keep track of starting scores
let playerScore = 0;
let computerScore = 0;

// DOM Elements
const buttons = document.querySelector('.buttons');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const winner = document.querySelector('.winner');
const pScore= document.querySelector('#player-score');
const cScore= document.querySelector('#computer-score');
const finalWinner = document.querySelector('.final-winner');
const restart = document.querySelector("#restart");

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

    // Show which selection won the round 
     if (computerSelection == playerSelection) {
        winner.textContent = "Tie! The computer also chose " + playerSelection + ".";
     } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            playerScore++;
            winner.textContent = "You win! The computer chose rock.";
        } else if (playerSelection == "scissors") {
            computerScore++;
            winner.textContent = "You lose! The computer chose rock.";
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            computerScore++;
            winner.textContent = "You lose! The computer chose paper.";
        } else if (playerSelection == "scissors") {
            playerScore++;
            winner.textContent = "You win! The computer chose paper.";
        }
     } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            playerScore++;
            winner.textContent = "You win! The computer chose scissors.";
        } else if (playerSelection == "paper") {
            computerScore++;
            winner.textContent = "You lose! The computer chose scissors.";
        }
     } 

     // Keep track of running scores
     pScore.textContent = playerScore;
     cScore.textContent = computerScore;
}

// Notify of winner when someone reaches 5 points
function endGame() {
    if (playerScore >= 5) {
        winner.textContent = "Congrats! You win.";
        disable();
    } else if (computerScore >= 5) {
        winner.textContent = "Game over! You lost.";
        disable();
    }
}

// Disables buttons once a winner is declared
function disable() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

// Consider adding a function to stop button input once there is a winner

// Restart game when the restart button is pressed
restart.addEventListener('click', () => {
    if (confirm("Are you sure you want to restart?") == true) {
        location.reload();
    }
})
