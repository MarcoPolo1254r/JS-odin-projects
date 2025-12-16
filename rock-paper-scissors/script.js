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

function playGame(){
    let playing = true;

    while(playing === true){

        let userChoice = getUserChoice();
        if (userChoice === null) {
            alert("Invalid input. Please try again.");
        continue;
        };

        const computerChoice = getComputerChoice();

        const result = getResult(userChoice,computerChoice);
        
        if(result === "win") wins++;
        else if (result === "loss") losses++;
        else draws++;

    alert(`
        You choose: ${userChoice}
        Opponent chose: ${computerChoice}
        Result: ${result}
        Score:
            Wins: ${wins}
            Losses: ${losses}
            Draws: ${draws}`
        );

        playing = confirm("Do you want o keep playing?")
    }
}

playGame()