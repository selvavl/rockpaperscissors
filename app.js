window.alert("Welcome to Rock, Paper, Scissors // Best to 5");

let winCount = 0;
let loseCount = 0;

game();

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

function playRound() {

    let playerSelection = prompt("Choose your weapon");

    let computerSelection = computerPlay();
    let message = "";
    function result() {
        alert(message);
    }

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        message = "It's a tie!";
        return result();

  } else if(playerSelection.toLowerCase() == "rock") { // PLAYER CHOOSES ROCK
      if(computerSelection.toLowerCase() == "scissors") {
          message = "Rock beats Scissors, You win!"
          winCount += 1;
          return result();
      } else if (computerSelection.toLowerCase() == "paper") {
          message = "Paper beats Rock, You Lose!"
          loseCount +=1;
          return result();
      }
  } else if(playerSelection.toLowerCase() == "paper") { // PLAYER CHOOSES PAPER
      if(computerSelection.toLowerCase() == "rock") {
          message = "Paper beats Rock, You win!"
          winCount += 1;
          return result();
      } else if (computerSelection.toLowerCase() == "scissors") {
          message = "Scissors beats Paper, You Lose!"
          loseCount +=1;
          return result();
      }
  } else if(playerSelection.toLowerCase() == "scissors") { // PLAYER CHOOSES SCISSORS
    if(computerSelection.toLowerCase() == "paper") {
        message = "Scissors beats Paper, You win!"
        winCount += 1;
        return result();
    } else if (computerSelection.toLowerCase() == "rock") {
        message = "Rock beats Scissors, You Lose!"
        loseCount +=1;
        return result();
    }
  } else {
      alert("Invalid value, try again");
      playRound();
  }
}

function game() {
    playRound();
    if(winCount == 5) {
        alert("You won");
    } else if(loseCount == 5) {
        alert("You Lost")
    } else {
        game();
    }

}