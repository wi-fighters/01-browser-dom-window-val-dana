let rndNum = randomNum(0, 10);
function randomNum(min, max) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;

}

console.log(randomNum);

function guessingGame() {
    let numberToGuess = randomNum;
    let count = 1;
    let guess = parseInt(prompt('Guess a number 1-10.'));

    while (guess !== numberToGuess && count < 3) {
        guess = prompt('Wrong. Try again.')
        count++;
    }

    if(guess === numberToGuess && count < 3) {
        console.log(`Success`);
    } else {
        console.log(`Fail.`)
    }
}

guessingGame();