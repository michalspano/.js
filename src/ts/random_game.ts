// TS specific:
declare var process: any;
declare var require: any;

// Compute random number from the range of n
function generateRandomNumber(n): number {
    return Math.floor(Math.random() * n) + 1;
}

// Default maximum number range
let numberRange: number = 10;

// Can be modified by command line arguments
if (process.argv.length > 2) {
    numberRange = parseInt(process.argv[2]);
}

// Generate the event
const randomGeneratedNumber: number = generateRandomNumber(numberRange);

// Require the readline module
var readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Create a recursive function to ask for the user input
// This function will be called until the correct answer is given
function runGame() {
    rl.question(`Guess a number between 1 and ${numberRange}: `, (answer) => {
        let currentGuess: number = parseInt(answer);
        if (currentGuess === randomGeneratedNumber) {
            console.log('Correct!');
            rl.close();  // Close the readline interface

        } else {
            console.log('Incorrect!');
            runGame();  // Recursive call
        }
    });
}

runGame();