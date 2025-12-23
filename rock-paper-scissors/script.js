let wins = 0;
let losses = 0;
let draws = 0;
let rounds = 1;

const options = document.querySelectorAll('li');
const roundCount = document.querySelector('#round');
const totalScore = document.querySelector('.score');
const userPlay = document.querySelector('#player-choice');
const computerPlay = document.querySelector('.computer-choice')



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

function updateResult (userChoice, elementId){

    const newImg = document.querySelector(elementId);

    switch (userChoice)
        {
            case "rock":             
                newImg.src = "./imgs/rock.png";
                newImg.alt = 'Image of a rock';
                newImg.width = 25;
                newImg.height = 25;
                break;

            case "paper":
                newImg.src = "./imgs/paper.png";
                newImg.alt = 'Image of a paper';
                newImg.width = 25;
                newImg.height = 25;
                break;

            case "scissor":
                newImg.src = "./imgs/scissor.png";
                newImg.alt = 'Image of a scissor';
                newImg.width = 25;
                newImg.height = 25;
                break;
    }
}

function playGame(playerChoice){

    updateResult(playerChoice, '#img-player-choice');
    const computerChoice = getComputerChoice();
    updateResult(computerChoice, '#img-computer-choice');    

    const result = getResult(playerChoice,computerChoice);
        
    if(result === "win") wins++;
    else if (result === "loss") losses++;
    else draws++;

    roundCount.textContent = 'Round:' + rounds;
    totalScore.textContent = 'Wins: ' +wins + ' X ' + ' Losses: ' + losses + 'Draws: ' + draws

    if(rounds === 5){
        findWinner(wins,losses);        
        rounds = 0;
        wins = 0;
        losses = 0;
        draws = 0;        
    }
    rounds++      
    
}