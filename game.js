const guessingGame = () => {
    let attempts = 0;

    while (attempts < 4) {

        const start = prompt('Guess a number between 1 and 10:');
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const inputAsNumber = parseInt(start, 10);
        attempts += 1;

        if (inputAsNumber === randomNumber) {
            alert(`Success, the number was ${randomNumber}! Attempts: ${attempts}`);
            break;
        } else if (inputAsNumber !== randomNumber && attempts !== 3) {
            alert(`Wrong!! Try again!!`);
        } else {
            alert(`Sorry, you failed to guess the number in 3 attempts. The number was ${randomNumber}.`);
            break;
        }
    }
};
guessingGame();