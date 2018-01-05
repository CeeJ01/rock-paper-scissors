// Your JavaScript goes here!


let wins = 0;
let loses = 0;
let ties = 0;
let winPercent = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function roundUp(num, precision) {
  precision = Math.pow(10, precision)
  return Math.ceil(num * precision) / precision
}

function computerPlay (){
    //Computer randomly selects what to play.

    //********** Change to cases!! ************
    let select;
    let play = "";
    select = getRandomInt(1, 4)
    switch(select){
      case (1):
        play = 'ROCK';
        break;
      case (2):
        play = 'PAPER';
        break;
      case (3):
        play = 'SCISSORS';
        break;
    }
    return play
}

function capitalizeFirstLetter(inputString) {
  inputString = inputString.toLowerCase();
  inputString = inputString.charAt(0).toUpperCase() + inputString.slice(1);
  return inputString;
}

function playRound(playerSelection, computerSelection) {
    //Comparing what the player plays and what the computer plays
  let playerSelectionUpper = playerSelection.toUpperCase()
  outputSelection(capitalizeFirstLetter(playerSelection), "p");
  outputSelection(capitalizeFirstLetter(computerSelection), "c");

  if (playerSelectionUpper == computerSelection) {
      outputResult('draw',playerSelection,computerSelection);
  }
  else if (playerSelectionUpper == "PAPER" && computerSelection == "ROCK") {
      outputResult('player',playerSelection, computerSelection);
  }
  else if (playerSelectionUpper == "PAPER" && computerSelection == "SCISSORS") {
      outputResult('computer',playerSelection, computerSelection);
  } 
  else if (playerSelectionUpper == "ROCK" && computerSelection == "SCISSORS") {
      outputResult('player',playerSelection, computerSelection);
  }
  else if (playerSelectionUpper == "ROCK" && computerSelection == "PAPER") {
      outputResult('computer',playerSelection, computerSelection);
  }
  else if (playerSelectionUpper == "SCISSORS" && computerSelection == "ROCK") {
      outputResult('computer',playerSelection, computerSelection);
  }
  else if (playerSelectionUpper == "SCISSORS" && computerSelection == "PAPER") {
      outputResult('player',playerSelection, computerSelection);
  }
  else {
    output.textContent = "Error"
  }
}

function outputSelection (selection, gamer) {
  let result = document.querySelector(`.${gamer}-choice`);
  switch (gamer){
    case ('c'): 
      result.textContent = selection;
      break;
    case ('p'):
      result.textContent = selection;
      break;
  }
}

function outputResult(winner,playerChoice, computerChoice) {
  playerChoice = capitalizeFirstLetter(playerChoice);
  computerChoice = capitalizeFirstLetter(computerChoice);

  let result = document.querySelector('.summary');
  switch (winner) {
      case ('player'):
        result.textContent = "Your " + playerChoice + " beat the Computer's " + computerChoice + ". You win this round!"; 
        document.querySelector('.wins').textContent++;
        wins++;
        break;
      case ('computer'):
        result.textContent = "The Computer's " + computerChoice + " beat out your " + playerChoice + ". You have lost the round.";
        document.querySelector('.loses').textContent++;
        loses++;
        break;
      case ('draw'):
        if (computerChoice == 'Scissors') result.textContent = "Both of your " + computerChoice + " clash together. It is a tie this round.";
        else result.textContent = "Both of your " + computerChoice + "s clash together. It is a tie this round.";
        document.querySelector('.ties').textContent++;
        ties++;
        break;
  }

  winPercent = ((wins / (wins + loses)) * 100);
  winPercent = roundUp(winPercent, 1);
  let winRatio = document.querySelector('.win-percent');
  if (winPercent > 0) {
    winRatio.textContent = winPercent + '%'; //incase first throw is a draw
  } else {
    winRatio.textContent = '0%';
  }
}

let playerSelect;
  //add button to begin playing
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerSelect = button.textContent;
    let computerSelect = computerPlay();
    playRound(playerSelect, computerSelect);
  });
});

