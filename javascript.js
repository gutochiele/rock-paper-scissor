//SET BASIC PARAMETERS 
let playerPoints = 0;
let computerPoints = 0;
let round = 0;

//SELECT THE ELEMENTS
const RockButton = document.querySelector('.rock');
const PaperButton = document.querySelector('.paper');
const ScissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const matchWinner = document.querySelector('.winner');
const buttons = document.querySelectorAll('button');

//CREATE THE EVENT LISTENERS OF THE BUTTONS
RockButton.addEventListener('click', () => {
   const compSelec = getComputerChoice(computerChoices);
   const playerSelec = 'Rock'
   playRound(playerSelec, compSelec)
   roundWinner(playerPoints, computerPoints) 
});

PaperButton.addEventListener('click', () => {
   const compSelec = getComputerChoice(computerChoices);
   const playerSelec = 'Paper'
   playRound(playerSelec, compSelec)
   roundWinner(playerPoints, computerPoints) 
});

ScissorsButton.addEventListener('click', () => {
   const compSelec = getComputerChoice(computerChoices);
   const playerSelec = 'Scissors'
   playRound(playerSelec, compSelec)
   roundWinner(playerPoints, computerPoints)   
});

//CREATES A FUNCTION THAT PLAYS EACH ROUND AND SETS THE GAME RULES
function playRound(playerSelec, compSelec) {
   if (playerSelec === compSelec){
      const p = document.createElement('p');
      p.innerText = `It's a draw, you both picked ${playerSelec}`
      outcomeDiv.appendChild(p)
      round++

   } else if ((playerSelec === "Rock" && compSelec === "Paper")
            || (playerSelec === "Paper" && compSelec === "Scissors")
            || (playerSelec === "Scissors" && compSelec === "Rock")){
         const p = document.createElement('p');
         p.innerText = `${compSelec} beats ${playerSelec}, you lose.`;
         outcomeDiv.appendChild(p)
         computerPoints++, round++;
            
   } else if ((playerSelec === "Rock" && compSelec === "Scissors") 
            || (playerSelec === "Paper" && compSelec === "Rock")
            || (playerSelec === "Scissors" && compSelec === "Paper")){
         const p = document.createElement('p');
         p.innerText = `${playerSelec} beats ${compSelec}, you win.`;
         outcomeDiv.appendChild(p)
         playerPoints++, round++
         
   } else {
      return alert("I did't understand that, try again");
   }
};


function roundWinner(playerPoints, computerPoints) {
   
   if (playerPoints == 5) {
      const h2 = document.createElement('h2');
      h2.innerText = `You are the winner, it's ${playerPoints} to ${computerPoints} for you! \nPress F5 to play again.`;
      h2.style.color = 'red';
      matchWinner.appendChild(h2);
      buttons.forEach(button => button.disabled = true);
      
   } else if (computerPoints == 5) {
      const h2 = document.createElement('h2');
      h2.innerText = `You are the loser! It's ${computerPoints} to ${playerPoints} for the computer. \nPress F5 to play again.`;
      h2.style.color = 'red';
      matchWinner.appendChild(h2);
      buttons.forEach(btn => btn.disabled = true);
      

}};

   
   //GETS RANDOM INPUT FROM THE COMPUTER
   const computerChoices = ["Rock", "Paper", "Scissors"];
   function getComputerChoice(list) {
   return list[Math.floor((Math.random()*list.length))];
   }
   // let compSelec;
   // compSelec = getComputerChoice(computerChoices);




   //GETS CASE INSENSITIVE INPUT FROM THE PLAYER      
   // let playerSelec = prompt("Rock, Paper or Scissors?\nChose wisely:");
   // playerSelec = playerSelec.toUpperCase();

   // //PRINTS SELECTED INPUT FROM BOTH PLAYERS
   // console.log("You play: " + playerSelec);
   // console.log("Computer plays: " + compSelec);

  
   //CALLS THE playRound FUNC TO START INSIDE THE game FUNC
   // playRound(playerSelec, compSelec);
   // console.log("Round: " + round)
   // console.log("------------------");
   // };
// };
   
//CALLS FOR THE GAME FUNCTION TO START
//  game();

//  DISPLAYS SCORE AND GAME STATS BY THE END OF THE MATCH
//  console.log("Score: Player " + playerPoints + " x " + computerPoints + " Computer");
//  if (playerPoints > computerPoints){
//     console.log("You WIN! :D")
//  } else if (playerPoints < computerPoints){
//     console.log("You lost! :(")
//  } else if (playerPoints === computerPoints){
//     console.log("It's a draw!")
//  }
