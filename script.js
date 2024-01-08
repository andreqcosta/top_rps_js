const CHOICES = ['rock', 'paper', 'scissor']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){    
    return CHOICES[getRandomInt(3)];
}

function playerSelection(){
    let playerChoice = prompt("Enter your choice: ");
    while (!CHOICES.includes(playerChoice.toLowerCase())){
	alert("Wrong choice! Valid choices: rock, paper or scissor");	
	playerChoice = prompt("Enter your choice: ");
    }
    return playerChoice
}

function playRound(playerChoice, computerChoice){
    console.log(playerChoice)
    console.log(computerChoice)
    if (playerChoice == computerChoice){
	return "tie"
    }else{
	if (playerChoice == "rock"){
	    switch (computerChoice){
	    case "paper":
		return "lose"
	    case "scissor":
		return "win"		
	    }
	}

	if (playerChoice == "paper"){
	    switch (computerChoice){
	    case "scissor":
		return "lose"
	    case "rock":
		return "win"		

	    }	    
	}
	
	if (playerChoice == "scissor"){
	    switch (computerChoice){
	    case "paper":
		return "win"
	    case "rock":
		return "lose"		
	    }
	}
    }
}

function game(){
    let playerPoints = 0
    let computerPoints = 0
    for (let i = 0;  i < 5; i++){
	result = playRound(playerSelection(), getComputerChoice())
	switch (result) {
	case "win":
	    playerPoints++
	    break
	case "lose":
	    computerPoints++
	    break
	}
	console.log(`Result: ${result}`)
    }
    if (playerPoints > computerPoints){
	console.log("player win the game")
    }else if(computerPoints > playerPoints){
	console.log("computer win the game")
    }else {
	console.log("It's a draw")
    }
    console.log(`(${playerPoints}:${computerPoints})`)
}

game()

