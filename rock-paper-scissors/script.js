
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

function getResult(){
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    if ( userChoice === "rock" && (computerChoice === "scissor") || 
        userChoice === "paper" && (computerChoice === "rock") ||
        userChoice === "scissor" && (computerChoice === "paper")) {
            return console.log("you Won")
        }
    if (userChoice === computerChoice){console.log ("It is a Draw")

    }
    if (userChoice === "scissor" && (computerChoice === "rock") || 
        userChoice === "rock" && (computerChoice === "paper") ||
        userChoice === "paper" && (computerChoice === "scissor")){
            return console.log ("you lost")
        }
    return null;
}

getResult()