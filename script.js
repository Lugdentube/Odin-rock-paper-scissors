//set initial score. user score is first, computer score is second.
let score = [0,0];

//grab elements that will display results and score
let resultMessage = document.querySelector('.results');
let scoreMessage = document.querySelector('.score');

//play a round in response to button click
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let userChoice = button.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    let result = playRound(userChoice,computerChoice);
    score = adjustScores(result,score);
    scoreMessage.textContent = `THE SCORE IS USER:${score[0]} COMPUTER:${score[1]}`

    if (score[0] === 5) {
      resultMessage.textContent = 'Congratulations! You won the game.';
      score = [0,0];
    } else if (score[1] === 5) {
      resultMessage.textContent = 'The computer won the game. Better luck next time.'
      score = [0,0];
    } else {
      resultMessage.textContent  = `${result}`;
    }
  });
});

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
  //determine message to be displayed based on userChoice and computerChoice
  let message;
  if (userChoice === computerChoice) {
    message = `You draw this round! You both played ${userChoice}`;
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    message = "You lose this round! Computer's paper covers your rock.";
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    message = "You win this round! Your rock smashes computer's scissors.";
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    message = "You win this round! Your paper covers Computer's rock.";
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    message = "You lose this round! Computer's scissors cuts your paper.";
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    message = "You lose this round! Computer's rock smashes your scissors.";
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    message = "You win this round! Your scissors cut computer's paper.";
  } else {
    message = 'error during playRound function. invalid user or computer choice';
  }
  return message;
}

// returns adjusted score array based on results
function adjustScores(result,score) {
  switch (result.charAt(4)) {
    case "w":
      score[0]++;
    break;
    case "l":
      score[1]++;
    break;
  }
  return score;
} 