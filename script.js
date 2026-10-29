function getComputerChoice() {
  const computerHands = {
    0: "rock",
    1: "paper",
    2: "scissors"
  }
  let n = Math.floor(Math.random() * 3);
  let computerChoice = computerHands[n];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose a hand from 'rock, paper, scissors: '");
  return humanChoice.toLowerCase();
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Tie! Both chose the same hand";
    }
  
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        return "You lose. Paper beats rock";
      } else {
        return "You win. Rock beats scissors";
      }
    }
  
    if (humanChoice === "paper") {
      if (computerChoice === "scissors") {
        return "You lose. Scissors beats paper";
      } else {
        return "You win. Paper beats rock";
      }
    }
  
    if (humanChoice === "scissors") {
      return "You lose! Rock beats scissors";
    } else {
      return "You win! Scissors beats paper";
    }
  }
  
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  
  let result = playRound(humanSelection, computerSelection);

  console.log(result);
  
  if (result.includes("You win")) {
    humanScore += 1;
  } else if (result.includes("You lose")) {
    computerScore += 1;
  }
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  playGame();
}

if (humanScore > computerScore) {
  console.log("You're a winner!");
} else if (humanScore < computerScore) {
  console.log("You're a loser!");
} else {
  console.log("Nobody's winner or loser. It's tie!");
}