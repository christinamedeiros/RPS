var userInput='bomb';
userInput=userInput.toLowerCase();

function getComputerChoice(){
  var computerChoice= Math.floor(Math.random()*3)
  if (computerChoice===0){
    return 'rock';
  } else if(computerChoice===1){
    return 'paper';
  } else {
    return 'scissors';
  }
};

function determineWinner(userChoice,computerChoice){
  if (userChoice===computerChoice){
    return "The game is a tie!";
  };
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'Computer won!';
    } else {
      return 'User won!';
    };
  };
  if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      return 'Computer won!';
    } else {
      return 'User won!';
    };
  };
  if(userChoice==='scissors'){
    if(computerChoice==='rock'){
      return 'Computer won!';
    } else {
      return 'User won!';
    };
  };
 if(userChoice==='bomb'){
   return 'User won!';
 };
};

function playGame(){
  var userChoice= userInput;
  var computerChoice=getComputerChoice();
  console.log(userChoice + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

  playGame();
