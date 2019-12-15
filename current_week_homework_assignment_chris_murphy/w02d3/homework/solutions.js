 ////////////////////////
// VERBAL QUESTIONS
////////////////////////

// 1. What is the difference between a parameter and an argument?
// A parameter is the variable that you initiate the function with in the () and the argument is the value or variable that you use in the () when you invoke the function

// 2. Within a function, what is the difference between return and console.log?
// console.log will print the result of the code to the console. return is used to return a value from a function to be used in another function or else where in the code.

 ////////////////////////
// PALINDROME
////////////////////////

// const checkPalindrome = (string) => {
    
//     const reverseString = string.toLowerCase().split("").reverse().join("");

//     if (string.toLowerCase() === reverseString) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkPalindrome("Radar"));

// console.log(checkPalindrome("Borscht"));

// console.log(checkPalindrome("SiRacecArS"));


 ////////////////////////
// SUM ARRAY
////////////////////////

// const sumArray = (arr) => {
//     let sum = 0;
//     for (let number of arr) {
//         sum += number;
//     }
//     return sum;

// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));



 ////////////////////////
// PRIME NUMBERS
////////////////////////

// const checkPrime = (num) => {
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//         console.log(i);
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true
// }
// console.log(checkPrime(5)); 


// const printPrimes = (limit) => {
//     for (i = 1; i <= limit; i++) {
//         if (checkPrime(i)) {
//             console.log(i);
//         }
//     }
    
// }

// console.log(printPrimes(97));



 ////////////////////////
// ROCK PAPER SCISSORS
////////////////////////

//Array of game moves
gameMove = ["rock", "paper", "scissors"];

const randomMove = () => {
    //gets a random integer with a max parameter value
    const getRandomNum = () => {
        return Math.floor(Math.random() * (gameMove.length));
    }
    // returns the random index of the gameMove array 
    return gameMove[getRandomNum()];
}

//stores the random move in each of the player variables
let computersMove = randomMove();
let playersMove = randomMove();

//function to play the game
const rockPaperScissors = (computersMove, playersMove) => {
    //consoles the player & computer moves
    console.log(`computer chose ${computersMove}`);
    console.log(`player chose ${playersMove}`);
    //conditional 
    if (computersMove === playersMove) {
        console.log(`${computersMove} ties ${playersMove}, try again!`)
    } else if (computersMove === "rock" && playersMove === "scissors"|| computersMove === "paper" && playersMove === "rock" || computersMove === "scissors" && playersMove === "paper"){    
        console.log(`${computersMove} beats ${playersMove}, computer wins!`);
    } else if(playersMove === "rock" && computersMove === "scissors"|| playersMove === "paper" && computersMove === "rock" || playersMove === "scissors" && computersMove === "paper"){    
        console.log(`${playersMove} beats ${computersMove}, players wins!`);
    }
}

rockPaperScissors(computersMove, playersMove);
