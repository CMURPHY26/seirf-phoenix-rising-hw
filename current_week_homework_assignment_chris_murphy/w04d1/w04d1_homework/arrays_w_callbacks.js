  ///////////////////////////////////////////
 /// Section 3 Array Methods with Callbacks
////////////////////////////////////////////

// A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.

// But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.

// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

// Two arrays to work with

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed!', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward!' ];

//   The first question is for the numbers array. The second question is for the words array.

// You don't have to write an answer to the thought questions.

// // Every
// // Determine if every number is greater than or equal to 0
// console.log(nums.every( num => num >= 0));

// // determine if every word shorter than 8 characters
// console.log(panagrams.every( word => word.length < 8 ));


// // Filter
// // filter the array for numbers less than 4
// console.log( nums.filter( num => num < 4 ) );
// // filter words that have an even length
// console.log(panagrams.filter( word => word.length % 2 === 0 ));


// // Find
// // Find the first value divisible by 5
// console.log( nums.find( num => num % 5 === 0) );

// // find the first word that is longer than 3 characters
// console.log(panagrams.find( word => word.length > 3 ));

// // Find Index
// // find the index of the first number that is divisible by 3
// console.log( nums.findIndex( num => num % 3 === 0) );
// // find the index of the first word that is less than 2 characters long
// console.log(panagrams.findIndex( word => word.length < 2 ));


// For Each
// console.log each value of the nums array multiplied by 3
nums.forEach( num => console.log( num * 3 ));

// console.log each word with an exclamation point at the end of it
panagrams.forEach( word => {
    if(word[word.length - 1] === "!" ) {
        console.log(word);
    }
});

// Thought Questions
// What happened to the original array?
// Can you store the values from a forEach method in a new array?


// Map
// make a new array of each number multiplied by 100
const newArrayNums = [];

nums.map( num => newArrayNums.push(num * 100));
console.log(newArrayNums);

//  make a new array of all the words in all uppercase
const newArrayWords = [];
panagrams.map( word => newArrayWords.push(word.toUpperCase()) );
console.log(newArrayWords);

// Thought Questions
// What happened to the original array?
// Can you store the values from a map method in a new array?


// Some
// Find out if some numbers are divisible by 7

console.log(nums.some( num => num % 7 === 0 ));

// Find out if some words have the letter a in them
console.log(panagrams.some( word => word.includes("a") ));



// Hungry for More
// Reduce
// Add all the numbers in the array together using the reduce method
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(nums.reduce(reducer));
// concatenate all the words using reduce
const wordReducer = (accumulator, currentValue) => `${accumulator} ${currentValue}`;// added string literal to add spaces between words
console.log(panagrams.reduce(wordReducer));

// Thought Questions

// What happened to the original array?
// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
const sortedNumsArray = nums.sort();
console.log(sortedNumsArray);
// Try to sort without any arguments, do you get what you'd expect with the words array?
const sortedWordsArray = panagrams.sort();
console.log(sortedWordsArray);
// Sort the numbers in ascending order
const sortedAscending = nums.sort( (a,b) => a - b);
console.log(sortedAscending);
// Sort the numbers in descending order
const descendingSort = nums.sort( (a,b) => b - a);
console.log(descendingSort);
// Sort the words in ascending order
const wordAscending = panagrams.sort( (a,b) => {
      if( a < b ) {
        return -1;
      } 
      if ( a > b) {
        return 1;
      }
      return 0;
    });
    console.log(wordAscending);
// Sort the words in descending order
const wordDescending = panagrams.sort( (a, b) => {
      if(a > b) {
        return -1;
      }
      if(a < b) {
        return 1;
      }
      return 0;
    });
    console.log(wordDescending);
// Thought Questions

// What happened to the original array?
