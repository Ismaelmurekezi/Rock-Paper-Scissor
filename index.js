const getComputerChoice=()=> {
    let compChoice = ["Rock", "Paper", "Scissor"];
    let compRandomChoice = Math.floor(Math.random() * 3);
    return compChoice[compRandomChoice];
  }
  
  const playRound=(playerSelection, computerSelection)=> {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    let string="Draw"
  
    if (
      (player === "rock" && computer === "paper") ||
      (player === "paper" && computer === "scissor") ||
      (player === "scissor" && computer === "rock")
    ) {
      return {
        result: "lose",
        message: `You lose! ${playerSelection} loses to ${computerSelection}`
      };
    } else if (
      (player === "rock" && computer === "scissor") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissor" && computer === "paper")
    ) {
      return {
        result: "win",
        message: `You win! ${playerSelection} wins against ${computerSelection}`
      };
    } else if (
        (player === "rock" && computer === "rock") ||
        (player==="paper"&& computer==="paper") ||
        (player==="scissor"&& computer==="scissor")
    )
        {
      return {
        result: "draw",
        message: `It's a draw!`
      };
    }
    else {
        return {

            result:alert("Please Enter among rock, paper or scissor only"),
            message: `It's a draw! `
        }
       
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
   
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt(`Round ${round}: Enter your choice among Rock, Paper, or Scissor`);
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
  
      console.log(roundResult.message);
  
      if (roundResult.result === "win") {
        playerScore++;
      } else if (roundResult.result === "lose") {
        computerScore++;
      }
    }
  
    console.log(`\nGame Over!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`);
  
    (playerScore> computerScore)?   console.log("Congratulations! You win the game!"):
    (playerScore < computerScore)?   console.log("Sorry, you lose the game."):
    console.log("The game ends in a draw.")
  }
  
  game();  