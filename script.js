let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Randomly generates target number
const generateTarget = () => Math.floor(Math.random() * 10);

// Calculate distance between guess and target number -- use Math.abs() to keep number > 0
const getAbsoluteDistance = (guess, target) => {
    return Math.abs(guess - target);
};

// Compares user & computer guesses to target value & returns winner
const compareGuesses = (userGuess, computerGuess, targetNumber) => {

    if (userGuess < 0 || userGuess > 9) {
        alert('Your number is out of range\n0 <= n <= 9');
    }

    userRange = getAbsoluteDistance(userGuess, targetNumber);
    compRange = getAbsoluteDistance(computerGuess, targetNumber);

    // Compare whose guess is closest to target
    if (userRange <= compRange) { 
        return true; 
    } else { 
        return false; 
    }
    
};

// Updates scores appropriately
const updateScore = winner => {
    if (winner === 'human') { humanScore++; }
    else { computerScore++; }
};

const advanceRound = () => currentRoundNumber++;


