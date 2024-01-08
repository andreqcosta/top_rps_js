const CHOICES = ['rock', 'paper', 'scissor']

let playerPoints = 0
let computerPoints = 0
let round = 0

const choices = document.querySelectorAll('.choice');
let result_text = document.querySelector(".result-text");
let result_point = document.querySelector(".result-point");
let result_choice = document.querySelector(".result-choice");


for(let i = 0; i < choices.length; i++){
    choices[i].addEventListener('click',() => {
	game(choices[i].textContent)
    });
}

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

function game(playerSelect){
    p = playerSelect.toLowerCase();
    c = getComputerChoice();
    result = playRound(p,c)
    round++
    switch (result) {
    case "win":
	playerPoints++
	break
    case "lose":
	computerPoints++
	break
    case "tie":
	round--
	break
    }
    result_text.textContent = `Result: ${result}`
    result_choice.textContent = `Player: ${p} - Computer: ${c}`
    result_point.textContent = `Player: ${playerPoints} - Computer: ${computerPoints}`
    if (round == 5){
	if (playerPoints > computerPoints){
	    console.log("player win the game")
	    result_text.textContent = "player win the game"
	}else if(computerPoints > playerPoints){
	    console.log("computer win the game")
	    result_text.textContent = "computer win the game"
	}
	
	console.log(`Result: ${result}`)	
	console.log(`(${playerPoints}:${computerPoints})`)
	
	playerPoints = 0
	computerPoints = 0
	round = 0
    }else{
	
	//game(playerSelection())
    }
}

//game(playerSelection())

