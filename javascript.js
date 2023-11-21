//SET BASIC PARAMETERS 
let playerPoints = 0;
let computerPoints = 0;
let round = 0;
let lose = 'You lost.'
let win = 'You win.'

//CREATES A FUNCTION THAT PLAYS EACH ROUND AND SETS THE GAME RULES
function playRound(playerSelec, compSelec) {
   if (playerSelec === compSelec){
      return console.log("It's a draw."), round++;

   } else if ((playerSelec === "Rock" && compSelec === "Paper")
            || (playerSelec === "Paper" && compSelec === "Scissors")
            || (playerSelec === "Scissors" && compSelec === "Rock")){
         return console.log(compSelec + " beats " + playerSelec + `. ${lose}`), computerPoints++, round++;
            
   } else if ((playerSelec === "Rock" && compSelec === "Scissors") 
            || (playerSelec === "Paper" && compSelec === "Rock")
            || (playerSelec === "Scissors" && compSelec === "Paper")){
         return console.log(playerSelec + " beats " + compSelec + `. ${win}`), playerPoints++, round++;
         
   } else {
      return console.log("I did't understand that, try again");
   }
};

   //GETS RANDOM INPUT FROM THE COMPUTER
   const computerChoices = ["Rock", "Paper", "Scissors"];
   function getComputerChoice(list) {
   return list[Math.floor((Math.random()*list.length))];
   }
   // let compSelec;
   // compSelec = getComputerChoice(computerChoices);


   const RockButton = document.querySelector('.rock');
   const PaperButton = document.querySelector('.paper');
   const ScissorsButton = document.querySelector('.scissors');
  

   RockButton.addEventListener('click', () => {
      const compSelec = getComputerChoice(computerChoices);
      const playerSelec = 'Rock'
      playRound(playerSelec, compSelec)
   });

   PaperButton.addEventListener('click', () => {
      const compSelec = getComputerChoice(computerChoices);
      const playerSelec = 'Paper'
      playRound(playerSelec, compSelec)
   });
   
   ScissorsButton.addEventListener('click', () => {
      const compSelec = getComputerChoice(computerChoices);
      const playerSelec = 'Scissors'
      playRound(playerSelec, compSelec)
   });

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

 //DISPLAYS SCORE AND GAME STATS BY THE END OF THE MATCH
//  console.log("Score: Player " + playerPoints + " x " + computerPoints + " Computer");
//  if (playerPoints > computerPoints){
//     console.log("You WIN! :D")
//  } else if (playerPoints < computerPoints){
//     console.log("You lost! :(")
//  } else if (playerPoints === computerPoints){
//     console.log("It's a draw!")
//  }
