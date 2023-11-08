const choices = ["rock", "paper", "scissors"];

function getComputerChoice(list) {
    return list[Math.floor((Math.random()*list.length))];
}

console.log(getComputerChoice(choices))
