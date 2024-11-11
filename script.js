const options = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
  return prompt("Hey human! Let's play rock paper scissors.").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You lose! Paper beats rocks.");
      computerScore++;
    } else if (computerChoice === "scissors") {
      console.log("You win! Rock beats scissors");
      humanScore++;
    } else {
      console.log("No body wins. Rock draws.");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beats paper.");
      humanScore++;
    } else if (computerChoice === "rock") {
      console.log("You lose! Rock beats scissors");
      computerScore++;
    } else {
      console.log("No body wins. Scissor draws.");
    }
  } else {
    if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats paper.");
      computerScore++;
    } else if (computerChoice === "rock") {
      console.log("You win! Paper beats rock");
      humanScore++;
    } else {
      console.log("No body wins. Paper draws.");
    }
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore >= computerScore) console.log("Human wins!");
  else console.log("Computer wins!");
}

playGame();
