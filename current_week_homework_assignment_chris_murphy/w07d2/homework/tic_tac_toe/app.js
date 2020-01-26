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
    let $messages = $("<div>").addClass("messages").text("Player One's Turn");
    $(".container").before($messages);
}

//Declare variable for array of player moves and number of moves
let playerArray = ["X","O"];
let numPlayerMoves = 0;

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
    numPlayerMoves += 1;
    }
    // console.log($(".messages").text());

    //Player move message logic
    if($(".messages").text() === "Player One's Turn") {
        // $(".messages").empty();
        $(".messages").text("Player Two's Turn");
    } else {
        $(".messages").text("Player One's Turn");
    }

    winGame();
}

let playerOneWinMessage = "Congrats! Player One Wins!!";
let playerTwoWinMessage = "Congrats! Player Two Wins!!";

const playerOneWin = () => {
    if(
        $("#5").text() === "X" && ($("#5").text() === $("#3").text() && $("#5").text() === $("#7").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#5").text() === "X" && ($("#5").text() === $("#1").text() && $("#5").text() === $("#9").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#5").text() === "X" && ($("#5").text() === $("#4").text() && $("#5").text() === $("#6").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#2").text() === "X" && ($("#2").text() === $("#5").text() && $("#2").text() === $("#8").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#2").text() === "X" && ($("#2").text() === $("#1").text() && $("#2").text() === $("#3").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#1").text() === "X" && ($("#1").text() === $("#4").text() && $("#1").text() === $("#7").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#3").text() === "X" && ($("#3").text() === $("#6").text() && $("#3").text() === $("#9").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } 
    else if (
        $("#7").text() === "X" && ($("#7").text() === ($("#8").text() && $("#7").text() === $("#9").text()))) {
            $(".messages").text(playerOneWinMessage);
            $("div").unbind();
        }
}

const playerTwoWin = () => {
    if(
        $("#5").text() === "O" && ($("#5").text() === $("#3").text() && $("#5").text() === $("#7").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#5").text() === "O" && ($("#5").text() === $("#1").text() && $("#5").text() === $("#9").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#5").text() === "O" && ($("#5").text() === $("#4").text() && $("#5").text() === $("#6").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#2").text() === "O" && ($("#2").text() === $("#5").text() && $("#2").text() === $("#8").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#2").text() === "O" && ($("#2").text() === $("#1").text() && $("#2").text() === $("#2").text() === $("#3").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#1").text() === "O" && ($("#1").text() === $("#4").text() && $("#1").text() === $("#7").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#3").text() === "O" && ($("#3").text() === $("#6").text() && $("#3").text() === $("#9").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } 
    else if (
        $("#7").text() === "O" && ($("#7").text() === $("#8").text() && $("#7").text() === $("#9").text())) {
            $(".messages").text(playerTwoWinMessage);
            $("div").unbind();
        }
}
// let winMessage = $(".messages").text("Congrats! You Won!!");

const winGame = () => {
    playerOneWin();
    playerTwoWin();
}


$(() => {
    console.log("It's working!")
    generateGrid();
    
    // $(".container").on("click", markSpot);
});