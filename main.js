const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const outcomeDiv = document.querySelector('.outcome');
const finalOutcome = document.querySelector('.final-outcome');
const playerScoreSpan = document.querySelector('.score1');
const computerScoreSpan = document.querySelector('.score2');
const bottom = document.querySelector('.extra');
const bottom2 = document.querySelector('.hidden');
let playerScore = 0;
let computerScore = 0;


const computerPlay = () =>{
    const selections = ['rock', 'paper', 'scissors'];
    let randomArray = Math.floor(Math.random() * selections.length);
    return selections[randomArray];
}

const playRound = function(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
    const text = document.createElement('p')   
        text.innerText = `This is a tie. You have both entered ${playerSelection}`
        outcomeDiv.appendChild(text);
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
    const text = document.createElement('p')
        text.innerText = 'You have lost'
        outcomeDiv.appendChild(text);
        computerScore++
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    const text = document.createElement('p')
        text.innerText = 'You have won!'
        outcomeDiv.appendChild(text);
        playerScore++
    }else if (playerSelection === 'paper' && computerSelection === 'rock'){
    const text = document.createElement('p')
        text.innerText = 'You have won!'
        outcomeDiv.appendChild(text);
        playerScore++
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
    const text = document.createElement('p')
        text.innerText = 'You have lost'
        outcomeDiv.appendChild(text);
        computerScore++
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
    const text = document.createElement('p')
        text.innerText = 'You have lost'
        outcomeDiv.appendChild(text);
        computerScore++
    }else if (playerSelection === 'scissors' && computerSelection === 'paper'){
    const text = document.createElement('p')
        text.innerText = 'You have won!'
        outcomeDiv.appendChild(text);
        playerScore++
    }else {
    const text = document.createElement('p')
        text.innerText = 'Please enter a valid value'
        outcomeDiv.appendChild(text);
    }

};
const player = document.querySelector('#users');
const computer = document.querySelector('#computers');


const checkWinner = function (playerScore, computerScore){
    if (playerScore === 5){
        const hello = document.createElement('h2');
        hello.innerText = `You have beaten the computer ${playerScore} to ${computerScore}`
        finalOutcome.append(hello);
    }else if (computerScore === 5){
        const hello = document.createElement('h2');
        hello.innerText = `The computer had beaten you ${computerScore} to ${playerScore}`;
        finalOutcome.append(hello);
    }
};

rockButton.addEventListener('click', () => {

    outcomeDiv.innerText = "";
    const playerSelection = 'rock'
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
    player.innerText = "";
    player.append(playerSelection);
    computer.innerText = "";
    computer.append(computerSelection);
    finalOutcome.innerText = "";
    checkWinner(playerScore, computerScore);
    playerScoreSpan.innerText = `${playerScore}`;
    computerScoreSpan.innerText = `${computerScore}`;
});

paperButton.addEventListener('click', () => {
    outcomeDiv.innerText = "";
    const playerSelection = 'paper';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    player.innerText = "";
    player.append(playerSelection);
    computer.innerText = "";
    computer.append(computerSelection);
    finalOutcome.innerText = "";
    checkWinner(playerScore, computerScore);
    playerScoreSpan.innerText = `${playerScore}`;
    computerScoreSpan.innerText = `${computerScore}`;
});

scissorsButton.addEventListener('click', () =>{
    outcomeDiv.innerText = "";
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    player.innerText = "";
    player.append(playerSelection);
    computer.innerText = "";
    computer.append(computerSelection);
    finalOutcome.innerText = "";
    checkWinner(playerScore, computerScore);
    playerScoreSpan.innerText = `${playerScore}`;
    computerScoreSpan.innerText = `${computerScore}`;
});



bottom.addEventListener('click', () => {
    const testing = document.createElement('h3');
    testing.innerText = "You have clicked a hidden button :)";
    bottom2.appendChild(testing);
   

});


