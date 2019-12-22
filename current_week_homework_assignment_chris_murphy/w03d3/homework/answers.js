
  //////////////////////////
 ////Datatypes Refresher
//////////////////////////


// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

// e.g. A computer that can be either on or off. 
// => datatype: boolean 
// => data structure example: const computer = true; 

// A light switch that can be either on or off.
// => datatype: boolean
// => data structure example: const lightSwitch = {on: true} 

// A user's email address.
// => datatype: string
// => data structure example: const user = {emailAddress: "joe@gmail.com"}

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// => datatype: array or object
// => data structure example: 
//const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"]
//const spaceship = {features:["hull", "laser blasters", "tractor beam", "warp drive"]}

// A list of student names from our class.
// => datatype: array
// => data structure example: const studentNames = ["personA", "personB"]


// A list of student names from our class, each with a location.
// => datatype: object and array
// => data structure example: 
// const class = {
//     students: [
//         {name: "Chris", location: "New York"},
//         {name: "Joe", location: "New York"}
//     ]
// }; 

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// => datatype: object and aray
// => data structure example: 
// const class = {
//     students: [
//         {name: "Chris", 
//         location: "New York"
//         favoriteTvShow: ["Breaking Bad", "Parks and Rec", "Sopranos"]
//         },
//         {name: "Joe", 
//         location: "New York"
//         favoriteTvShow: ["Breaking Bad", "Parks and Rec", "Sopranos"]
//         }
//     ]
// }; 


  //////////////////////////
 ////Take it Easy
//////////////////////////


// Make an array that holds all of the colors of the rainbow.

const colorsOfRainbow = ["red", "orange", "yellow", "green", "blue", "indigo",  "violet"];

// Write code that will access "blue" from the rainbow array.
console.log(colorsOfRainbow[4]);
// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

const chrisMurphy = {
    favoriteFood: "Pizza",
    hobby: "Playing Guitar",
    town: "Huntington",
    favoriteDataType: "object"
};

// Write code that will access your hobby from the object that you just created.
console.log(chrisMurphy.hobby);