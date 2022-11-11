// Keep track of starting scores
let playerScore = 0;
let computerScore = 0;

// DOM Elements
const results = document.querySelector('#results');

getPlayerChoice();

// Get random computer choice
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    let random = array[Math.floor(Math.random() * 3)];
    return random;
}

// Start a round when player hits a button selection
function getPlayerChoice() {
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
}

// Play a single round of rock paper scissors using button input as player selection
function playRound(playerSelection) {
    // Get new computer selection at the start of the round
    let computerSelection = getComputerChoice();

    // Show player and computer selection for the round on the web page
    

    const selection = document.createElement('div');
    selection.classList.add('selection');
    selection.textContent = "Computer: " + computerSelection + ", Player: " + playerSelection;

    results.appendChild(selection);

    // Show which selection won the round 
    roundWinner.classList.add('roundWinner');
    
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

     results.appendChild(roundWinner);

     // Keep track of running scores
     const playerRunningScore = document.createElement('div');
     playerRunningScore.classList.add('player-score');
     playerRunningScore.textContent = "Player: " + playerScore;
     results.appendChild(playerRunningScore);

     const computerRunningScore = document.createElement('div');
     computerRunningScore.classList.add('computer-score');
     computerRunningScore.textContent = "Computer: " + computerScore;
     results.appendChild(computerRunningScore);

    // Popup alert to notify of game results when someone reaches 5 points
     if (playerScore >= 5) {
        alert("Congrats! You win.");
    } else if (computerScore >= 5) {
        alert("Game over! You lost.");
    }
}



/*
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


*/

