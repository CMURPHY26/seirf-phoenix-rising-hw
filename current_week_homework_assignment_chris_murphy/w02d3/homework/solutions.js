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

const checkPalindrome = (string) => {
    
    const reverseString = string.toLowerCase().split("").reverse().join("");

    if (string.toLowerCase() === reverseString) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPalindrome("Radar"));

console.log(checkPalindrome("Borscht"));

console.log(checkPalindrome("SiRacecArS"));