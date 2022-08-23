//we need to determine the computers selection
function getComputerChoice() {
  //Define ranNum as a random integer between 0 and 2
  ranNum = Math.floor(Math.random()*3);
  
  //conditional statement to define computerChoice using ranNum
  let computerChoice;
  switch (ranNum) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break;
    default:
      console.log('unexpectated case during getComputerChoice execution. Selection failed.')
      break;
  }
  return computerChoice;
}

//we need to determine the winner of a round
function playRound(userChoice, computerChoice) {
  //make input case insensitive
  userChoice = userChoice.toLowerCase();

  //determine message to be displayed based on userChoice and computerChoice
  let message;
  if (userChoice === computerChoice) {
    message = `You draw! You both played ${userChoice}`;
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    message = 'You lose! Paper covers your rock.';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    message = 'You win! Your rock smashes scissors.';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    message = 'You win! Your paper covers rock.';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    message = 'You lose! Scissors cuts your paper.';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    message = 'You lose! Rock smashes your scissors.';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    message = 'You win! Your scissors cut paper.';
  } else {
    message = 'error during playRound function. invalid user or computer choice';
  }
  return message;
}

//We need to play a game of 5 rounds
function game() {
  let userScore = 0;
  let computerScore = 0;
  
  for (let i = 0; i < 5; i++) {
    //determine choices and play round
    let computerChoice = getComputerChoice();
    let userChoice = prompt("Rock, paper, or scissors?");
    result = playRound(userChoice,computerChoice);
    //print the result message to the console
    console.log(result);
    
    //adjust userScore and Computer score based on result message
    switch (result.charAt(4)) {
      case "w":
        userScore++;
      break;
      case "l":
        computerScore++;
      break;
    }
    
    //print the total score so far to the console
    console.log(`User:${userScore} Computer:${computerScore}`);
  }

  //print final results to the console
  if (userScore > computerScore) {
    console.log('User wins the game!');
  } else if (computerScore > userScore) {
    console.log('Computer wins the game!');
  } else if (computerScore === userScore) {
    console.log('Draw! we are all losers here.')
  }
}