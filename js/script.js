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

printMessage('Twoj ruch to: ' + playerMove);

