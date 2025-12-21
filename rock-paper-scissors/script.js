let wins = 0;
let losses = 0;
let draws = 0;
let rounds = 1;

const options = document.querySelectorAll('li');
const roundCount = document.querySelector('#round');
const totalScore = document.querySelector('.score');



options.forEach((item) => {
    item.addEventListener('click',(element) => {
        const choice = item.textContent;
        console.log(choice);
        playGame(choice);
    })
})

function getComputerChoice(){
    const choice = ["rock","paper","scissor"];
    let index = Math.floor(Math.random()*3)
    return choice[index]
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

function playGame(choice){

    let userChoice = choice;
        
    const computerChoice = getComputerChoice();

    const result = getResult(userChoice,computerChoice);
        
    if(result === "win") wins++;
    else if (result === "loss") losses++;
    else draws++;

    roundCount.textContent = 'Round:' + rounds;
    totalScore.textContent = 'Wins: ' +wins + ' X ' + ' Losses: ' + losses

    // alert(`
    //     ROUND ${rounds}
    //     You choose: ${userChoice}
    //     Opponent chose: ${computerChoice}
    //     Result: ${result}
    //     Score:
    //         Wins: ${wins}
    //         Losses: ${losses}
    //         Draws: ${draws}`
    //     );

    if(rounds === 5){findWinner(wins,losses)}
    rounds++      
    
}