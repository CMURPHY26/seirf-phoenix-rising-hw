
  //////////////////////////////////////////
 /////Section 1: Programming Fundamentals
///////////////////////////////////////////


// DRY
// Using programming constructs like loops, functions, classes, etc to prevent repetition of code.

// KISS (Keep It Simple, Stupid)
// Writing simple code takes less time to write, has fewer bugs and is easier to read and modify.

// Avoid creating a YAGNI (You Aren't Going to Need It)
// Do not create functionality outside of the requirement scope of the project


// Do the simplest thing that could possibly work
// Try to imagine the simplest solution to a problem, rather than overcomplicating it.

// Don't make me think
// A principle focusing on the ease of readibility of code for other developers. 

// Write code for the maintainer
// Avoid using overcomplicated solutions or algorithms for the sake of keeping it simple to ease the maintainability of the application for future developers

// Single responsibility principle
// A block of code should perform a single well defined task or function

// Avoid premature optimization
// Ensure you have a working code base for your whole project prior to focusing on refactoring and optimizing the code

// Separation of concerns
// Different areas or blocks of functionality should be managed by distinct modules of code

// Answer
// Write a ~1 sentence summary for each one
// SEE ABOVE

// Which ones surprise you (if any)?
// Avoid premature optimization makes sense but it is also interesting to me that you wouldn't want to refactor your code while you are writing it and fully conscious of the syntactic structure of each block of code.

// Which one is currently giving you the most struggle?
//Do the simplest thing that could possibly work is giving me the most struggle as sometimes I think I overcomplicate the problem and solution I try to develop.


// Commenting Code
// Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

// const f = l => { //f is a function that takes l as a parameter
//   let es = 0, p = 0, c = 1, n = 0// variables are declared and values set
//   while (c <= l) { //WHILE variable c (initially 1) is less than or equal to parameter/variable l DO the following:
//     n = c + p; // set n equal to c + p
//     [c, p] = [n, c]; //c equals p, n equals c
//     es += (c % 2 === 0) ? c : 0 //IF c divided by 2 produces a remainder of 0 add c to es, ELSE add 0 to es 
//   }
//   return es // return es
// }

// console.log(f(55))

// At first we may strive for the shortest code possible. But we really should be striving for readable code that is easy to maintain. Compare the same solution with more semantic variable names (feel free to use this one to help you figure out what is happening in this function:

    // const f2 = (limit) => {
    //   let evenSum = 0;
    //   let previous = 0;
    //   let current = 1;
    //   while (current <= limit) {
    //     let next = current + previous;
    //     previous = current;
    //     current = next;
    //     if (current % 2 === 0) {
    //       evenSum += current;
    //     }
    //   }
    //   return evenSum;
    // }
    
    
//     console.log(f2(55))

// Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// A more semantic name for this function could have been sumOfEvenNumbers, current could have been currentNumber, previous -> previousNumber, next -> nextNumber

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// I would have preferred to start with f2 because it was easier to understand and modify

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// No the semi colon is not necessary as long as the code remains in that vertical structure

