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

// Play a single round of rock paper scissors
function playRound(playerSelection) {
    // Get new computer selection at the start of the round
    let computerSelection = getComputerChoice();
    // let playerSelection = getPlayerChoice();
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

/*

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Computer: " + computerScore + ", Player: " + playerScore);
    }
} 

game();
// For now, remove the logic that plays exactly five rounds

// Compare player to computer, determine and print winner
if (playerScore > computerScore) {
    console.log("Player wins!");
} else if (playerScore < computerScore) {
    console.log("Computer wins!");
} else {
    console.log("Tie!");
}

*/



