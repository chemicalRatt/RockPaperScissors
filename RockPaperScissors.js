function getComputerChoice(){
    switch(Math.floor(Math.random() * 3)+1){
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
}

function getPlayerChoice(){
    let playerChoice = prompt('Choose rock, paper, or scissors').toLowerCase();
    if(playerChoice !== "rock" && playerChoice !== "scissors" && playerChoice !== "paper"){
        alert("Invalid Choice! Try again!");
        getPlayerChoice();
    }
    else{
        return playerChoice;;
    }
}

function playRound(){
    let p = getPlayerChoice();
    let c = getComputerChoice();

    console.log("Computer chose " + c + " and you chose " + p);

    if(p===c){
        return 0;
    }

    switch (p+c){
        case "rockscissors":
            return 1;
        case "scissorspaper":
            return 1;
        case "paperrock":
            return 1;
        default:
            return 2;
    }
}

function game(){
    console.log("Let's play rock, paper, scissors!");

    let pCount = 0;
    let cCount = 0;
    let playAgain = null;

    for(let i = 0; i < 5; i++){
        switch (playRound()){
            case 1:
                console.log("You won the round!");
                pCount++;
                break;
            case 2:
                console.log("You lost the round! Oh no!");
                cCount++;
                break;
            default:
                console.log("It's a tie! Replaying round...");
                i--;
        }
    }

    pCount > cCount ? console.log("You won the game! You won " + pCount + " out of 5 rounds!") : console.log("You lost the game! You won " + pCount + " out of 5 rounds!");

    playAgain = prompt("Play again?").toLowerCase();

    if (playAgain === "yes" || playAgain === "y"){
        game();
    }

    return 0;

}

console.log(game());