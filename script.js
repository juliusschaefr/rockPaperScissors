function playGame() {
  function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    //console.log(randomNumber);
    return Math.floor(randomNumber);
  }

  function getPlayerChoice() {
    let playerChoice = prompt("Please enter rock/paper/scissors");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "r") {
      return 0;
    } else if (playerChoice === "paper" || playerChoice === "p") {
      return 1;
    } else if (playerChoice === "scissors" || playerChoice === "s") {
      return 2;
    } else alert("Wrong input! Grr!");
  }

  function numberToRPS(number) {
    if (number === 0) return "rock";
    else if (number === 1) return "paper";
    else if (number === 2) return "scissors";
    else return "an invalid input";
  }

  function calculateWinner(playerChoice, computerChoice) {
    if (playerChoice - computerChoice === 0) return "draw";
    else if (
      playerChoice - computerChoice === 1 ||
      playerChoice - computerChoice === -2
    )
      return "player";
    else return "computer";
  }

  function playRound(playerChoice, computerChoice) {
    console.log(`
You picked ${numberToRPS(playerChoice)}.
The computer picked ${numberToRPS(computerChoice)}.
`);

    let winner = calculateWinner(playerChoice, computerChoice);

    if (winner === "player") console.log("You won! Well done!");
    else if (winner === "computer")
      console.log("You lost. Better luck next time!");
    else if (winner === "draw") console.log("It's a draw!");

    return winner;
  }

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let winner = playRound(playerChoice, computerChoice);

    if (winner === "player") playerScore++;
    else if (winner === "computer") computerScore++;
    else if (winner === "draw") i--;
  }
  console.log(`
FINAL SCORES:
You     : ${playerScore}
Computer: ${computerScore}
`);
}
