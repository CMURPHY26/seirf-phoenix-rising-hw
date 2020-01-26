//CREATE fucntion to generate grid
const generateGrid = () => {
    //CREATE div container for board
    let $container = $("<div>").addClass("container");
    //APPEND container to body
    $("body").append($container);
    //LOOP to create 9 divs with class boxes
    for (let i = 1; i < 10; i++){
    let $div = $("<div>").attr("id", i).addClass("boxes");
    //ADD click listener to mark the spot when clicked
    $div.on("click", markSpot);
    $container.append($div);
    }
}

//Declare variable for array of player moves
let playerArray = ["X","O"];

//CREATE function to mark the spot
const markSpot = (event) => {
    // console.log($(event.target));
    //DECLARE variable for targeted box
    let boxClicked = $(event.target);
    // console.log(boxClicked.text())
    //IF the length of text of that div is equal to Zero 
    if(boxClicked.text().length === 0) {
    //THEN append the first move from the Array
    //PUSH that move to the end of the array
    //SHIFT that move off the beginning of the array
    // so the next move can be accessed
    boxClicked.append(playerArray[0]);
    playerArray.push(playerArray[0]);
    playerArray.shift(playerArray[0]);
    }
}

$(() => {
    console.log("It's working!")
    generateGrid()
    // $(".container").on("click", markSpot);
});