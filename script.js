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
  console.log(computerChoice);
}

//we need to recieve the users selection

//we need to determine the winner

//we need to display the appropriate message containing the result