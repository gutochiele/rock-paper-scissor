function game(playRound) {
   let playerPoints = 0
   let computerPoints = 0
const computerChoices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice(list) {
    return list[Math.floor((Math.random()*list.length))];
}

let answer = prompt("Rock, paper or Scissors?\nChose wisely:");
const playerSelection = answer.toUpperCase()

const computerSelection = getComputerChoice(computerChoices)

console.log("You play: " + playerSelection)
console.log("Computer plays: " + computerSelection)

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        // return console.log("It's a draw!")

    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") 
            || (playerSelection === "PAPER" && computerSelection === "SCISSORS") 
            || (playerSelection === "SCISSORS" && computerSelection === "ROCK")){
        // return console.log("You lose!")
        return playerPoints++

    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
            || (playerSelection === "PAPER" && computerSelection === "ROCK")
            || (playerSelection === "SCISSORS" && computerSelection === "PAPER")){
        // return console.log("You win!")
        return computerPoints++

    } else {
        return console.log("Wrong choice, try again")
    }
        console.log("Score")
}
    playRound(playerSelection, computerSelection) 
    }

    for (let i = 0; i < 5; i++)
    game();