//SET BASIC PARAMETERS 
let playerPoints = 0;
let computerPoints = 0;
let round = 0;

//CREATES A FUNCTION THAT PLAYS EACH ROUND AND SETS THE GAME RULES
function playRound(playerSelec, compSelec) {
   if (playerSelec === compSelec){
      return console.log("It's a draw."), round++;

   } else if ((playerSelec === "rock" && compSelec === "paper")
            || (playerSelec === "paper" && compSelec === "scissors")
            || (playerSelec === "scissors" && compSelec === "rock")){
         return console.log(compSelec + " beats " + playerSelec), computerPoints++, round++;
            
   } else if ((playerSelec === "rock" && compSelec === "scissors") 
            || (playerSelec === "paper" && compSelec === "rock")
            || (playerSelec === "scissors" && compSelec === "paper")){
         return console.log(playerSelec + " beats " + compSelec), playerPoints++, round++;
         
   } else {
      return console.log("I did't understand that, try again");
   }
};


   //GETS RANDOM INPUT FROM THE COMPUTER
   const computerChoices = ["rock", "paper", "scissors"];
   function getComputerChoice(list) {
   return list[Math.floor((Math.random()*list.length))];
   }
   let compSelec;
   compSelec = getComputerChoice(computerChoices);


   const btns = document.querySelectorAll('button');
   btns.forEach((button) => {
   button.addEventListener('click', playRound);

})

  

   //GETS CASE INSENSITIVE INPUT FROM THE PLAYER      
   // let playerSelec = prompt("Rock, paper or scissors?\nChose wisely:");
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
