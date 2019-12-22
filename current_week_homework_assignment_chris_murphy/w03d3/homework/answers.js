
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
// console.log(colorsOfRainbow[4]);


// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

const chrisMurphy = {
    favoriteFood: "Pizza",
    hobby: "Playing Guitar",
    town: "Huntington",
    favoriteDataType: "object"
};

// Write code that will access your hobby from the object that you just created.
// console.log(chrisMurphy.hobby);







  //////////////////////////
 ////Crazy Object!
//////////////////////////

const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}
// Use crazy Object to log the following.

// "omg my mouth is burning"
let hottestSalsa = crazyObject.taco[1].salsa[crazyObject.taco[1].salsa.length - 1];
console.log(hottestSalsa);
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);
// Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
console.log(crazyObject.larry.quotes);
