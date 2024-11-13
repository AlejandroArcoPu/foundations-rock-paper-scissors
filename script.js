const options = ["rock", "paper", "scissors"];

let resultDiv = document.querySelector(".results");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function checkTheWinner(humanScore, computerScore) {
  return humanScore > computerScore
    ? "✨ Sensational! You won the game! ✨"
    : "😔 Oh no! You lost! 😔";
}

// function getHumanChoice() {
//   return prompt("Hey human! Let's play rock paper scissors.").toLowerCase();
// }

function playRound(humanChoice, computerChoice) {
  const pRound = document.createElement("p");
  pRound.classList.add("round");
  pRound.setAttribute("style", "font-weight: bold");
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      pRound.textContent = "You lose! Paper beats rocks.";
      pRound.style.color = "red";
      computerScore++;
    } else if (computerChoice === "scissors") {
      pRound.textContent = "You win! Rock beats scissors.";
      pRound.style.color = "green";
      humanScore++;
    } else {
      pRound.textContent = "No body wins. Rock draws.";
      pRound.style.color = "orange";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      pRound.textContent = "You win! Scissors beats paper.";
      pRound.style.color = "green";
      humanScore++;
    } else if (computerChoice === "rock") {
      pRound.textContent = "You lose! Rock beats scissors.";
      pRound.style.color = "red";
      computerScore++;
    } else {
      pRound.textContent = "No body wins. Scissor draws.";
      pRound.style.color = "orange";
    }
  } else {
    if (computerChoice === "scissors") {
      pRound.textContent = "You lose! Scissors beats paper.";
      pRound.style.color = "red";
      computerScore++;
    } else if (computerChoice === "rock") {
      pRound.textContent = "You win! Paper beats rock.";
      pRound.style.color = "green";
      humanScore++;
    } else {
      pRound.textContent = "No body wins. Paper draws.";
      pRound.style.color = "orange";
    }
  }
  resultDiv.appendChild(pRound);
}

let optionsDiv = document.querySelector(".options");
optionsDiv.addEventListener("click", (e) => {
  const existingWinner = document.querySelector(".winner");
  if (existingWinner) existingWinner.remove();

  const computerSelection = getComputerChoice();

  const humanChoiceWithoutEmoji = e.target.textContent.includes("paper")
    ? e.target.textContent.slice(0, -3)
    : e.target.textContent.slice(0, -2);
  playRound(humanChoiceWithoutEmoji, computerSelection);
  if (humanScore == 5 || computerScore == 5) {
    document.querySelectorAll(".round").forEach((el) => el.remove());
    const winner = checkTheWinner(humanScore, computerScore);
    const pWinner = document.createElement("p");
    pWinner.classList.add("winner");
    pWinner.textContent = winner;
    resultDiv.appendChild(pWinner);
    humanScore = 0;
    computerScore = 0;
  }
});

// function playGame() {
//   for (let i = 1; i <= 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   if (humanScore >= computerScore) console.log("Human wins!");
//   else console.log("Computer wins!");
// }

// playGame();
