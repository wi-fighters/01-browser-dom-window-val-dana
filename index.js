let rndNum = randomNum(0, 10);
function randomNum(min, max) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function guessingGame() {
    let numberToGuess = rndNum;
    let count = 1;
    let guess = parseInt(prompt('Guess a number 1-10.'));

    while ((guess !== numberToGuess) && (count < 3)) {
        guess = parseInt(prompt('Wrong. Try again.'))
        count++;
    }

    if ((guess === numberToGuess) && (count <= 3)) {
        console.log(`Success! Number of attempts: ${count}`);
    } else {
        console.log(`Sorry, you failed to guess the number in three attempts. The number was ${numberToGuess}!`)
    }
}

guessingGame();