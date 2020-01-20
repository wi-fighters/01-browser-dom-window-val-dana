const guessingGame = () => {
    var attempts = 1;

    while (attempts < 4) {

        var start = prompt('Guess a number between 1 and 10:');
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        var userInput = start;

        if (userInput == randomNumber) {
            alert(`Success, the number was ${randomNumber}! Attempts: ${attempts}`);
            break;
        } else if (userInput !== randomNumber && attempts !== 3) {
            attempts++;
            alert(`Wrong!! Try again!!`);
        } else {
            alert(`Sorry, you failed to guess the number in 3 attempts. The number was ${randomNumber}.`);
            break;
        }
    }
};
guessingGame();