console.log("Welcome to Rock, Paper, Scissors");

function computerPlay() {

    let selectorValue = Math.floor(Math.random()*3);
    let computerValue = "";

    switch (selectorValue) {
        case 0:
            computerValue = "Rock";
            break;
        case 1:
            computerValue = "Paper";
            break;
        case 2:
            computerValue = "Scissors";
            break;
    }

    return computerValue;
}


function playRound(playerSelection) {

    let computerSelection = computerPlay();
    let message = "";

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        message = "It's a tie!";
        return message;

  } else if(playerSelection.toLowerCase() == "rock") { // PLAYER CHOOSES ROCK
      if(computerSelection.toLowerCase() == "scissors") {
          message = "Rock beats Scissors, You win!"
          return message;
      } else if (computerSelection.toLowerCase() == "paper") {
          message = "Paper beats Rock, You Lose!"
          return message;
      }
  } else if(playerSelection.toLowerCase() == "paper") { // PLAYER CHOOSES PAPER
      if(computerSelection.toLowerCase() == "rock") {
          message = "Paper beats Rock, You win!"
          return message;
      } else if (computerSelection.toLowerCase() == "scissors") {
          message = "Scissors beats Paper, You Lose!"
          return message;
      }
  } else if(playerSelection.toLowerCase() == "scissors") { // PLAYER CHOOSES SCISSORS
    if(computerSelection.toLowerCase() == "paper") {
        message = "Scissors beats Paper, You win!"
        return message;
    } else if (computerSelection.toLowerCase() == "rock") {
        message = "Rock beats Scissors, You Lose!"
        return message;
    }
  } else {
      message = "Invalid value, try again"
      return message;
  }
}

  
/*  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));*/