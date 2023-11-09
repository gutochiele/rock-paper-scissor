let playerPoints = 0
let computerPoints = 0
let round = 0

function game(playRound) {

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
     return console.log("It's a draw!\n---------------"), round++

 } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") 
         || (playerSelection === "PAPER" && computerSelection === "SCISSORS") 
         || (playerSelection === "SCISSORS" && computerSelection === "ROCK")){
        return console.log(computerSelection + " beats " + playerSelection + "\n---------------"), computerPoints++, round++
        

 } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
         || (playerSelection === "PAPER" && computerSelection === "ROCK")
         || (playerSelection === "SCISSORS" && computerSelection === "PAPER")){
        return console.log(playerSelection + " beats " + computerSelection + "\n---------------"), playerPoints++, round++
       

 } else {
     return console.log("Wrong choice, try again\n---------------")
 }

}
 playRound(playerSelection, computerSelection)
 }

 for (i= 0; i< 5; i++)
 game()
 console.log("Round: " + round + "\nScore: Player " + playerPoints + " x " + computerPoints + " Computer")
 if (playerPoints > computerPoints){
    console.log("You WIN!")
 } else if (playerPoints < computerPoints){
    console.log("You lose!")
 } else if (playerPoints == computerPoints){
    console.log("It's a draw")
 }
 console.log("Press F5 to play again.")