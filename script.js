// Function to get computer's choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  // Convert playerSelection to lowercase for case-insensitive comparison
  playerSelection = playerSelection.toLowerCase();

  // Check for a tie
  if (playerSelection === computerSelection.toLowerCase()) {
    return "It's a tie!";
  }

  // Check all possible winning scenarios for the player
  if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }

  // If none of the above conditions are met, the player loses
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));