let randomNumber;
let currentGuess = 50;
let remainingGuesses = 5;
let guessLog = [];

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function updateGuess(value) {
    currentGuess = Math.min(100, Math.max(1, currentGuess + value));
    document.getElementById("current-guess").textContent = currentGuess;
}

function checkGuess() {
    let response = getResponse(currentGuess);
    guessLog.push(`Guess: ${currentGuess}, Response: ${response}`);
    document.getElementById("guess-log").textContent = guessLog.join('\n');
    if (response === "Correct!") {
        endGame(true);
    } else {
        if (response !== "Very Hot" || Math.random() > 0.05) {
            remainingGuesses--;
        }
        document.getElementById("guesses-remaining").textContent = remainingGuesses;
        if (remainingGuesses === 0) {
            endGame(false);
        }
    }
}

function getResponse(guess) {
    let difference = Math.abs(randomNumber - guess);
    if (difference === 0) {
        return "Correct!";
    } else if (difference <= 5) {
        return "Very Hot";
    } else if (difference <= 8) {
        return "Hot";
    } else if (difference <= 15) {
        return "Very Warm";
    } else if (difference <= 20) {
        return "Warm";
    } else if (difference <= 30) {
        return "Cool";
    } else if (difference <= 40) {
        return "Very Cool";
    } else if (difference <= 55) {
        return "Cold";
    } else {
        return "Very Cold";
    }
}

function endGame(isWinner) {
    if (isWinner) {
        alert(`Congratulations! You guessed the number ${randomNumber}!`);
    } else {
        alert(`Sorry, you lost! The number was ${randomNumber}.`);
    }
    resetGame();
}

function resetGame() {
    currentGuess = 50;
    remainingGuesses = 5;
    guessLog = [];
    document.getElementById("current-guess").textContent = currentGuess;
    document.getElementById("guesses-remaining").textContent = remainingGuesses;
    document.getElementById("guess-log").textContent = "";
    generateRandomNumber();
}

// Initial setup
generateRandomNumber();
