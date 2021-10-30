const prompt = require("prompt");

prompt.start();

const computerPlay = () => {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else if (randomNum === 2) {
    return "scissors";
  }
};

const rockPaperScissors = (playerSelection, computerSelection) => {
  return playerSelection.toLowerCase() === "rock" &&
    computerSelection === "scissors"
    ? "You Win! rock beats scissors"
    : playerSelection.toLowerCase() === "paper" && computerSelection === "rock"
    ? "You Win! paper beats rock"
    : playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper"
    ? "You Win! scissors beats paper"
    : `You Lose! ${computerSelection} beats ${playerSelection}`;
};

const game = () => {
  let computerWins = 0;
  let playerWins = 0;
  let rounds = 5;
  let userSelection = "Rock";
  while (rounds > 0) {
    let play = rockPaperScissors(userSelection, computerPlay());
    console.log(play);
    if (play.includes("You Win!")) {
      playerWins++;
    } else if (play.includes("You Lose!")) {
      computerWins++;
    }
    rounds--;
  }
};

game();
