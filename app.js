//FUNCTIONS

//window.alert("Welcome to Rock, Paper, Scissors // Best to 5");

//DOM MANIPULATION

const vax = document.getElementById("vax");
const avx = document.getElementById("avx");
const vir = document.getElementById("vir");
const humanChoose = document.getElementById("human-choose");
const cpuChoose = document.getElementById("cpu-choose");
const resultText = document.getElementById("result-text");
const humanScore = document.getElementById("human-score");
const cpuScore = document.getElementById("cpu-score");
const scoreboard = document.getElementById("scoreboard");
const restartButton = document.getElementById("restart");



let winCount = 0;
let loseCount = 0;
let roundGame = 1;

function game() {
        vax.addEventListener("click", () => {
            playRound("vax");
        });
    
        avx.addEventListener("click", () => {
            playRound("avx");
        });
    
        vir.addEventListener("click", () => {
            playRound("vir");
        });
    
}



//game();

function computerPlay() {

    let selectorValue = Math.floor(Math.random()*3);
    let computerValue = "";

    switch (selectorValue) {
        case 0:
            computerValue = "vax";
            cpuChoose.src="rockpaperscissors/img/vax.svg"
            break;
        case 1:
            computerValue = "avx";
            cpuChoose.src="rockpaperscissors/img/avx.png"
            break;
        case 2:
            computerValue = "vir";
            cpuChoose.src="rockpaperscissors/img/vir.svg"
            break;
    }

    
    return computerValue;
}


function playRound(playerSelection) {

    let message = "";
    let status = "";

    function scoreText() {
        const boardText = document.createElement("p");
        boardText.textContent = status;
        scoreboard.appendChild(boardText);
    }

    if(winCount == 5) {
        return;

    } else if (loseCount == 5) {
        return;
    }

    let computerSelection = computerPlay();

    if(playerSelection == "vax" || playerSelection == "vir"){
        humanChoose.src=`rockpaperscissors/img/${playerSelection}.svg`;} 
        else {
            humanChoose.src=`rockpaperscissors/img/${playerSelection}.png`
        }
        
    function result() {

        if(winCount == 5) {
            message = `YOU WON IN A TOTAL OF ${roundGame - 1} ROUNDS!`
    
        } else if (loseCount == 5) {
            message = `YOU LOST IN A TOTAL OF ${roundGame - 1} ROUNDS!`
        }

        resultText.innerHTML = message;
        humanScore.innerHTML = winCount;
        cpuScore.innerHTML = loseCount;
        scoreText();
    }

    if(playerSelection == computerSelection) {
        message = "Ape shall never kill Ape.";
        status = `YOU TIED ROUND ${roundGame}`
        roundGame++;
        return result();

  } else if(playerSelection == "vax") { // PLAYER CHOOSES VACCINE
      if(computerSelection == "vir") {
          message = "You killed the virus succesfully, You win!"
          status = `YOU WON ROUND ${roundGame}`
          winCount++;
          roundGame++;
          return result();
      } else if (computerSelection == "avx") {
          message = "You were burnt by an AntiVax, You Lose!"
          status = `YOU LOST ROUND ${roundGame}`
          loseCount++;
          roundGame++;
          return result();
      }
  } else if(playerSelection == "avx") { // PLAYER CHOOSES ANTIVAX
      if(computerSelection == "vax") {
          message = "You burnt the Vaccine, now you'll die in 6 months, You win!"
          status = `YOU WON ROUND ${roundGame}`
          winCount++;
          roundGame++;
          return result();
      } else if (computerSelection == "vir") {
          message = "Virus killed you, should have vaccinated last year, You Lose!"
          status = `YOU LOST ROUND ${roundGame}`
          loseCount++;
          roundGame++;
          return result();
      }
  } else if(playerSelection == "vir") { // PLAYER CHOOSES VIRUS
    if(computerSelection == "avx") {
        message = "You killed the AntiVax, who said humans are more intelligent than microscopic life?, You win!"
        status = `YOU WON ROUND ${roundGame}`
        winCount++;
        roundGame++;
        return result();
    } else if (computerSelection == "vax") {
        message = "You entered into a vaccinated human, you have no choice but to die, You Lose!"
        status = `YOU LOST ROUND ${roundGame}`
        loseCount++;
        roundGame++;
        return result();
    }
  } else {
      alert("Invalid value, try again");
      playRound();
  }
}

function restart() {
    restartButton.addEventListener("click", () => {
        location.reload();
    });
}

restart();
game();