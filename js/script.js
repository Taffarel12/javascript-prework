function getMoveName(argMoveId){
	if(argMoveId == 1){
		return 'kamien';
	}
	if(argMoveId == 2){
		return 'papier';
	}
	if(argMoveId == 3){
		return 'nozyce';
	} else {
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
	}
  }
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
	computerMove = 'kamien';
}
if(randomNumber == 2){
	computerMove = 'papier';
}
if(randomNumber == 3){
	computerMove = 'nozyce';
}*/

printMessage('Moj ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.');

console.log('Gracz wpisal: ' + playerInput);

let playerMove = getMoveName(randomNumber);

/*if(playerInput == '1'){
	playerMove = 'kamien';
}
if(playerInput == '2'){
	playerMove = 'papier';
}
if(playerInput == '3'){
	playerMove = 'nozyce';
}
if(playerInput == ''){
	playerMove = 'nieznany ruch'
}*/

printMessage('Twoj ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove)
{
	printMessage('Zagralem' + argComputerMove + ', a Ty' + argPlayerMove);
	if(argComputerMove == 'kamien' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	}
	if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
		printMessage('Remis!');
	}
	if(argComputerMove == 'nozyce' && argPlayerMove == 'papier'){
		printMessage('Ty przegrywasz!');
	}
	if(argPlayerMove == 'nieznany ruch'){
		printMessage('Wykonaj ruch');
	}
	if(argComputerMove == 'kamien' && argPlayerMove == 'kamien'){
		printMessage('Remis!');
	}
	if(argComputerMove == 'papier' && argPlayerMove == 'kamien'){
		printMessage('Ty Przegrywasz!');
	}
	if(argComputerMove == 'nozyce' && argPlayerMove == 'kamien'){
		printMessage('Ty wygrywasz!')
	}
	if(argComputerMove == 'kamien' && argPlayerMove == 'nozyce'){
		printMessage('Ty przegrywasz!');
	}
	if(argComputerMove == 'papier' && argPlayerMove == 'nozyce'){
		printMessage('Ty Wygrywasz!');
	}
	if(argComputerMove == 'nozyce' && argPlayerMove == 'nozyce'){
		printMessage('Remis!')
	}
}



