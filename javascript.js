let selection;
let solution;

let computerScore = 0;
let playerScore = 0;
let roundRecord = 0;

let computerSelection;
let playerSelection;

//-------------------------------------------------------------------------------------------------

//randomly selects Rock, Paper, or Scissors for Comp. Returns the selection. 
function computerPlay(){
    let solution = Math.floor(Math.random()*10);
 
    if(solution <= 3){
        selection = 'rock';
    }
 
    else if(solution <= 6) {
        selection = 'paper';
    }
 
    else {
        selection = 'scissors';
    }
 
    return selection;
}

//the oneRound function to play a single round
//returns roundResult values of 1 (tie), 2 (computer W), and 3 (player W)
function oneRound(playerSelection, computerSelection){

    if (playerSelection == 'rock' && computerSelection == 'rock') {
        console.log("It's a tie!");
        result = 1;
    }

    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        console.log("It's a tie!");
        result = 1;
    }

    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        console.log("It's a tie!");
        result = 1;
    }

    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log("The Computer wins this round!");
        result = 2;
    }

    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log("The Computer wins this round!");
        result = 2;
    }
    
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log("The Computer wins this round!");
        result = 2;
    }

    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("The Player wins this round!");
        result = 3;
    }
    
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("The Player wins this round!");
        result = 3;
    }
    
    else  {
        console.log("The Player wins this round!");
        result = 3;
    }

    return result;
} 

//plays a 5 round game of Rock, Paper, Scissors
//SHOULD return a string declaring the Winner, so I can just console.log the variable that gets assigned the returned string
function game(playerScore, computerScore) {
    
        playerSelection = window.prompt('Please select rock, paper, or scissor.').toLowerCase();
        computerSelection = computerPlay();
    
        let roundOne = oneRound(playerSelection, computerSelection);
            if (roundOne == 2) {
                computerScore += 1;
            }
            else if (roundOne == 3) {
                playerScore += 1;
            }
        
            playerSelection = window.prompt('Please select rock, paper, or scissor.').toLowerCase();
            computerSelection = computerPlay();
        let roundTwo = oneRound(playerSelection, computerSelection);
            if (roundTwo == 2) {
                computerScore += 1;
            }
            else if (roundTwo == 3) {
                playerScore += 1;
            }

            playerSelection = window.prompt('Please select rock, paper, or scissor.').toLowerCase();
            computerSelection = computerPlay();
        let roundThree = oneRound(playerSelection, computerSelection);
            if (roundThree == 2) {
                computerScore += 1;
            }
            else if (roundThree == 3) {
                playerScore += 1;
            }

            playerSelection = window.prompt('Please select rock, paper, or scissor.').toLowerCase();
            computerSelection = computerPlay();
        let roundFour = oneRound(playerSelection, computerSelection);
            if (roundFour == 2) {
                computerScore += 1;
            }
            else if (roundFour == 3) {
                playerScore += 1;
            }

            playerSelection = window.prompt('Please select rock, paper, or scissor.').toLowerCase();
            computerSelection = computerPlay();
        let roundFive = oneRound(playerSelection, computerSelection);
            if (roundFive == 2) {
                computerScore += 1;
            }
            else if (roundFive == 3) {
                playerScore += 1;
            }
            
        if (playerScore > computerScore) {
            result = "the player wins!"
            return result;
        } 
        else if (playerScore < computerScore) {
            result = "the computer wins!"
            return result;
        }
        else {
            result = "it's a tie";
            return result;
        }
    }


//-------------------------------------------------------------------------------------------------

let resultGame = game(playerScore, computerScore); 

console.log(resultGame);