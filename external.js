function getComputerChoice(){
    let choice = Math.random()*3;
    choice = Math.ceil(choice);
    switch(choice){
        case 1:
            return "rock";break;
        case 2:
            return "paper";break;
        case 3:
            return "scissors";break;
    }
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection==computerSelection){
        return 2;
    }else if(playerSelection=="scissors" && computerSelection=="paper"){
        return 1;
    }else if(playerSelection=="paper" && computerSelection=="rock"){
        return 1;
    }else if(playerSelection=="rock" && computerSelection=="scissors"){
        return 1;
    }else{
        return 0;
    }
  }
function game(playerSelection){
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    // for(let i=0;i<5;i++){
        // playerSelection = prompt().toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playerSelection+" "+computerSelection);
        if(playRound(playerSelection, computerSelection)==1){
            playerScore++;
        }else if(playRound(playerSelection, computerSelection)==0){
            computerScore++;
        }else{
            playerScore++;
            computerScore++;
        }
        console.log(playerScore+" "+computerScore)
    // }
}

const btn = document.querySelectorAll('button');
const h1 = document.querySelector('#output');
let playerSelection;
console.log(btn);
btn.forEach(element => {
    element.addEventListener('click',()=> {
        console.log(element.id);
        playerSelection = element.id;
        let computerSelection;
        let playerScore = 0;
        let computerScore = 0;
        // for(let i=0;i<5;i++){
            // playerSelection = prompt().toLowerCase();
            computerSelection = getComputerChoice();
            console.log(playerSelection+" "+computerSelection);
            if(playRound(playerSelection, computerSelection)==1){
                playerScore++;
            }else if(playRound(playerSelection, computerSelection)==0){
                computerScore++;
            }else{
                playerScore++;
                computerScore++;
            }
            console.log(playerScore+" "+computerScore)
            if(playerScore>computerScore){
                h1.textContent = "You Win!!!"
            }else if(playerScore == computerScore){
                h1.textContent = "It's a Tie!"
            }else{
                h1.textContent = "The computer won"
            }
        // }
    });
});


