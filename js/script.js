let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
	computerMove = 'kamien';
}
if(randomNumber == 2){
	computerMove = 'papier';
}
if(randomNumber == 3){
	computerMove = 'nozyce';
}

printMessage('Moj ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swoj ruch! 1: kamien, 2: papier, 3: nozyce.');

console.log('Gracz wpisal: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
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
}

printMessage('Twoj ruch to: ' + playerMove);

if( computerMove == 'kamien' && playerMove == 'papier'){
	printMessage('Ty wygrywasz!');
}
if(computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis!');
}
if( computerMove == 'nozyce' && playerMove == 'papier'){
	printMessage('Ty przegrywasz!')
}
if(playerMove == 'nieznany ruch'){
	printMessage('Wykonaj ruch')
}
if( computerMove == 'kamien' && playerMove == 'kamien'){
	printMessage('Remis!');
}
if(computerMove == 'papier' && playerMove == 'kamien'){
	printMessage('Ty Przegrywasz!');
}
if( computerMove == 'nozyce' && playerMove == 'kamien'){
	printMessage('Ty wygrywasz!')
}
if( computerMove == 'kamien' && playerMove == 'nozyce'){
	printMessage('Ty przegrywasz!');
}
if(computerMove == 'papier' && playerMove == 'nozyce'){
	printMessage('Ty Wygrywasz!');
}
if( computerMove == 'nozyce' && playerMove == 'nozyce'){
	printMessage('Remis!')
}