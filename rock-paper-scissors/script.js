let wins = 0;
let losses = 0;
let draws = 0;

function getComputerChoice(){
    const choice = ["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3)
    return choice[index]
}

function getUserChoice () {
    const input = prompt("Choose Rock, Paper or scissor");
    if (!input) {
        return null
    }

    const choice = input.trim().toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissor"){
        return choice
    }
    
    return null;
}

function getResult(userChoice,computerChoice){
    
    if ( userChoice === "rock" && (computerChoice === "scissor") || 
        userChoice === "paper" && (computerChoice === "rock") ||
        userChoice === "scissor" && (computerChoice === "paper")) {
            return "win"          
        }
    if (userChoice === computerChoice){
        return "draw"
    }
    return "loss"
}

function findWinner (wins,losses){
    if(wins>losses) {alert(`You Won!
        SCORE:
            Wins: ${wins}
            Losses: ${losses}
            Draws: ${draws}`)}
    else{alert(`You lost!
        SCORE:
            Wins: ${wins}
            Losses: ${losses}
            Draws: ${draws}`)        
    } 
}

function playGame(){
    let rounds = 1;
    alert("RULES: Rock Paper Scissors is played with three possible choices: rock, paper, and scissors. Rock beats scissors, scissors beats paper, and paper beats rock. If both the player and the computer choose the same option, the round ends in a draw. Each round compares one choice from the player and one from the computer, and the winner of the round earns one point who has the most poinsts at the end of 5 rounds wins. NOTE: if you input anything other than rock paper or scissors the game will close")
    while(rounds <= 5){

        let userChoice = getUserChoice();
        if (userChoice === null) {
            break;
        };

        const computerChoice = getComputerChoice();

        const result = getResult(userChoice,computerChoice);
        
        if(result === "win") wins++;
        else if (result === "loss") losses++;
        else draws++;

    alert(`
        ROUND ${rounds}
        You choose: ${userChoice}
        Opponent chose: ${computerChoice}
        Result: ${result}
        Score:
            Wins: ${wins}
            Losses: ${losses}
            Draws: ${draws}`
        );
        if(rounds === 5){findWinner(wins,losses)}
        rounds++
        
    }
}

playGame()