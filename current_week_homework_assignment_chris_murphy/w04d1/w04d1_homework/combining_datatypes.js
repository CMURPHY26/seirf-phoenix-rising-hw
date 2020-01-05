  /////////////////////////////////////
 /// Section 2 Combining Datatypes
//////////////////////////////////////
// // Combine objects, arrays, and functions
// // Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

// const crayonBox = {
//     crayons: ["green", "blue", "orange","purple","red","yellow", "violet", "indigo"]
// };

// console.log(crayonBox.crayons[1]);

// // Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object.

// const bottle = {
//     cap: {
//         material: "metal",
//         color: "silver"
//     }
// }

// console.log(bottle.cap.material);

// // Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.

// const receipt = [{name: "chicken", price: 5},{name: "lettuce", price: 1},{name: "peppers", price: 2},{name: "berries", price: 3}];

// console.log(receipt[3].name);

// // Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

// const apartmentBuilding = [["joe", "chris", "tara", "lauren", "alex"],105,{street: "main", number: 18, crossStreet: "townline"}];

// console.log(apartmentBuilding[0][3]);



  /////////////////////////////////////////////////////////////////////
 /// Combine objects, arrays, and functions more than one level deep
//////////////////////////////////////////////////////////////////////

// // Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

// const knit = () => {
//     return {item: "scarf", size: "6ft", color: "purple"};
// }

// console.log(knit().item);

// // Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

// // const crayonBox = {
// //     crayons: ["green", "blue", "orange","purple","red","yellow", "violet", "indigo"]
// // };
// const crayonSelector = () => {
//     return crayonBox;
// }

// console.log(crayonSelector().crayons[3]);


// // Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

// const powerButton = () => {
//     return options = () => {
//         console.log("select a song");
//     };
// };

// console.log( powerButton()() );



// Model a Vending Machine Model a vending machine

// a vending machine is an object

const vendingMachine = {
    // it has an array of snacks (make 3 snacks)
    snacks: [
        // snacks are objects that have a name and a price
        {name: "potato chips", price: 1}, 
        {name: "chocolate chip cookies", price: 4}, 
        {name: "candy bar", price: 2}
    ],
    // a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
    vend: (num) => { 
        return vendingMachine.snacks[num].name;
    }
};

// Be able to call vendingMachine.vend() with a valid integer to return a snack
console.log(vendingMachine.vend(1));


  ///////////////
 /// Callbacks
/////////////////

// Make a function add that takes two arguments (numbers) and sums them together

const add = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
};

console.log(add(1,2));

// Make a function subtract that takes two arguments (numbers) and subtracts them
const subtract = (num1, num2) => {
    let number = num1 - num2;
    return number;
};

console.log(subtract(4,2));

// Make a function multiply that takes two arguments and multiplies them

const multiply = (num1, num2) => {
    let total = num1 * num2;
    return total;
};

console.log(multiply(4,2));

// Make a function divide that takes two arguments and divides them

const divide = (num1, num2) => {
    let total = num1 / num2;
    return total;
};

console.log(divide(4,2));

// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.

const calculate = (num1, num2, operates) => {
    return operates(num1, num2);
};

// Call calculate 4 times, each time using one of the operation functions you wrote

console.log(calculate(5,2,add));
console.log(calculate(5,2,subtract));
console.log(calculate(5,2,multiply));
console.log(calculate(5,2,divide));



// // Function definition placement
// // Clean up this code, so that it works and has function definitions in the correct place


// const bar = () => {
//     console.log('bar here');
// }

// bar();

// const foo = () => {
//     console.log('foo here');
// }

// foo();


// Error reading
// What is meant by the error(s) this produces?
//It means that it is missing the equals sign to complete the foo declaration
//it should be:
/*
const foo = () => {
    console.log('hi');
}
foo();
*/
foo();
const foo ()=>{
    console.log('hi');
}
