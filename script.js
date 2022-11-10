// Get computer choice: random number between 0, 1, 2, then assign to rock, paper, or scissors
function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    let random = array[Math.floor(Math.random() * 3)];
    return random;
}

// Responsive button UI to get player selection and run round
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

getPlayerChoice();

// Keep track of starting scores
let playerScore = 0;
let computerScore = 0;

// Play a single round of rock paper scissors using button input as player selection
function playRound(playerSelection) {
    // Get new computer selection at the start of the round
    let computerSelection = getComputerChoice();

    // Show player and computer selection for the round on the web page
    const results = document.querySelector('#results');

    const selection = document.createElement('div');
    selection.classList.add('selection');
    selection.textContent = "Computer: " + computerSelection + ", Player: " + playerSelection;

    results.appendChild(selection);

    // Show which selection won the round 
    const roundWinner = document.createElement('div');
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
}


/*

// Play a single round of rock paper scissors using button input as player selection
function playRound(playerSelection) {
    // Get new computer selection at the start of the round
    let computerSelection = getComputerChoice();
    // Show player and computer selection for the round
    console.log("Computer: " + computerSelection + ", Player: " + playerSelection);
    // Show which selection won the round
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

*/


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

