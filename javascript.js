//SET BASIC PARAMETERS 
let playerPoints = 0;
let computerPoints = 0;
let round = 0;

//CREATES A FUNCTION THAT PLAYS EACH ROUND AND SETS THE GAME RULES
function playRound(playerSelec, compSelec) {
   if (playerSelec === compSelec){
      return console.log("It's a draw."), round++;

   } else if ((playerSelec === "ROCK" && compSelec === "PAPER")
            || (playerSelec === "PAPER" && compSelec === "SCISSORS")
            || (playerSelec === "SCISSORS" && compSelec === "ROCK")){
         return console.log(compSelec + " beats " + playerSelec), computerPoints++, round++;
            
   } else if ((playerSelec === "ROCK" && compSelec === "SCISSORS") 
            || (playerSelec === "PAPER" && compSelec === "ROCK")
            || (playerSelec === "SCISSORS" && compSelec === "PAPER")){
         return console.log(playerSelec + " beats " + compSelec), playerPoints++, round++;
         
   } else {
      return console.log("I did't understand that, try again");
   }
};

//CREATE THE GAME FUNC AND LOOPS IT FOR 5 ROUNDS
function game() {
   for ( ; round < 5; ){

   //GETS RANDOM INPUT FROM THE COMPUTER
   const computerChoices = ["ROCK", "PAPER", "SCISSORS"];
   function getComputerChoice(list) {
   return list[Math.floor((Math.random()*list.length))];
   }
   let compSelec;
   compSelec = getComputerChoice(computerChoices);

   //GETS CASE INSENSITIVE INPUT FROM THE PLAYER
   let playerSelec = prompt("Rock, paper or scissors?\nChose wisely:");
   playerSelec = playerSelec.toUpperCase();

   //PRINTS SELECTED INPUT FROM BOTH PLAYERS
   console.log("You play: " + playerSelec);
   console.log("Computer plays: " + compSelec);

  
   //CALLS THE playRound FUNC TO START INSIDE THE game FUNC
   playRound(playerSelec, compSelec);
   console.log("Round: " + round)
   console.log("------------------");
   };
};
   
//CALLS FOR THE GAME FUNCTION TO START
 game();

 //DISPLAYS SCORE AND GAME STATS BY THE END OF THE MATCH
 console.log("Score: Player " + playerPoints + " x " + computerPoints + " Computer");
 if (playerPoints > computerPoints){
    console.log("You WIN! :D")
 } else if (playerPoints < computerPoints){
    console.log("You lost! :(")
 } else if (playerPoints === computerPoints){
    console.log("It's a draw!")
 }
 console.log("Press F5 to play again.");
