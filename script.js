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

//we need to recieve the users selection


//we need to determine the winner
function playRound(userChoice, computerChoice) {
  //make input case insensitive
  userChoice = userChoice.toLowerCase();

  //determine message to be displayed based on userChoice and computerChoice
  let message;
  if (userChoice === computerChoice) {
    message = `Draw. You both played ${userChoice}`;
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    message = 'You Lose! Paper covers your rock.';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    message = 'You Win! Your rock smashes scissors.';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    message = 'You Win! Your paper covers rock.';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    message = 'You Lose! Scissors cuts your paper.';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    message = 'You Lose! Rock smashes your scissors.';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    message = 'You Win! Your scissors cut paper.';
  } else {
    message = 'error during playRound function. invalid user or computer choice';
  }
  return message;
}

//we need to display the appropriate message containing the result