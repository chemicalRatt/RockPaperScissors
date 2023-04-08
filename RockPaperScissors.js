const BTN_ROCK = document.getElementById("rock");
const BTN_PAPER = document.getElementById("paper");
const BTN_SCISSORS = document.getElementById("scissors");
const BTN_RESTART = document.createElement("button");

const BTN_CONTAINER = document.getElementById("button-container");

const CPU_CHOICE = document.getElementById("cpu-choice");
const PLAYER_CHOICE = document.getElementById("player-choice");
const DIALOG = document.getElementById("dialog");
const PLAYER_SCORE = document.getElementById("player-score");
const CPU_SCORE = document.getElementById("cpu-score");

const OPPONENT_SELECTIONS = ["Rock","Paper","Scissors"];

let playerScore = 0;
let opponentScore = 0;

function getOpponentSelection(){
    let opponentSelection = OPPONENT_SELECTIONS[Math.random() * OPPONENT_SELECTIONS.length | 0]
    return opponentSelection;
}

function checkGameOver(){
    if(playerScore === 5){
        playerScore = 0;
        opponentScore = 0;
        updateDisplay("end","win","lose");
    }
    else if (opponentScore === 5){
        playerScore = 0;
        opponentScore = 0;
        updateDisplay("end","lose","win");
    }
}

function updateDisplay(roundResult, pSelection, oSelection){
    
    switch (roundResult){
        case "end":
            BTN_CONTAINER.innerHTML = "";
            BTN_RESTART.innerText = "Start New Game";
            BTN_CONTAINER.appendChild(BTN_RESTART);
            BTN_RESTART.addEventListener("click", refreshPage, false);
            
            if(pSelection == "win"){
                DIALOG.innerText += "\nYou won the game!";
            }
            else if (oSelection == "win"){
                DIALOG.innerText += "\nYou lost the game!";
            }
            break;
        case 0:
            PLAYER_CHOICE.innerText = `Player chose\n${pSelection}!`;
            CPU_CHOICE.innerText = `CPU chose\n${oSelection}!`;
            DIALOG.innerText = "It's a tie!";
            PLAYER_SCORE.innerText = `Player: ${playerScore}`;
            CPU_SCORE.innerText = `CPU: ${opponentScore}`;
            
            break;
        case 1:
            PLAYER_CHOICE.innerText = `Player chose\n${pSelection}!`;
            CPU_CHOICE.innerText = `CPU chose\n${oSelection}!`;
            DIALOG.innerText = `${pSelection} beats ${oSelection}! You won the round!`;
            PLAYER_SCORE.innerText = `Player: ${playerScore}`;
            CPU_SCORE.innerText = `CPU: ${opponentScore}`;
            break;
        case 2:
            PLAYER_CHOICE.innerText = `Player chose\n${pSelection}!`;
            CPU_CHOICE.innerText = `CPU chose\n${oSelection}!`;
            DIALOG.innerText = `${oSelection} beats ${pSelection}! You lost the round!`;
            PLAYER_SCORE.innerText = `Player: ${playerScore}`;
            CPU_SCORE.innerText = `CPU: ${opponentScore}`;
            break;
    }
}

function refreshPage(){
    location.reload();
}

function playRound(playerSelection){
    let pSelection = playerSelection;
    let oSelection = getOpponentSelection();
    let roundResult = null;

    if (pSelection == oSelection){
        roundResult = 0;
    }
    else if(pSelection === "Rock" && oSelection === "Scissors"){
        roundResult = 1;
        playerScore++;
    }
    else if(pSelection === "Paper" && oSelection === "Rock"){
        roundResult = 1;
        playerScore++;
    }
    else if(pSelection === "Scissors" && oSelection === "Paper"){
        roundResult = 1;
        playerScore++;
    }
    else {
        roundResult = 2;
        opponentScore++;
    }
    updateDisplay(roundResult, pSelection, oSelection);
    checkGameOver();
}

function testingFunction(input){
    console.log(input);
}


BTN_ROCK.addEventListener("click", playRound.bind(null,"Rock"), false);
BTN_PAPER.addEventListener("click", playRound.bind(null,"Paper"), false);
BTN_SCISSORS.addEventListener("click", playRound.bind(null, "Scissors"), false);

