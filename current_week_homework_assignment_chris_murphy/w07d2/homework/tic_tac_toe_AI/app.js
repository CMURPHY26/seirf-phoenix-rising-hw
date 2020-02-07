//CREATE fucntion to generate grid
const generateGrid = () => {
    //CREATE div container for board
    let $container = $("<div>").addClass("container");
    //APPEND container to body
    $("body").append($container);
    //LOOP to create 9 divs with class boxes
    for (let i = 1; i < 10; i++){
    let $div = $("<div>").attr("id", "box" + i).addClass("boxes");
    //ADD click listener to mark the spot when clicked
    $div.on("click", markSpot);
    $container.append($div);
    }
    // let $messages = $("<div>").addClass("messages").text("Player One's Turn");
    // $(".container").before($messages);
}

//Declare variable for array of player moves and number of moves
let playerOne = "X";
let computer = "O";
let numPlayerMoves = 0;

const computerMove = () => {
    // console.log($(".container").children().eq(Math.floor(Math.random()* 10)));
    let $randomDiv = $(".container").children().eq(Math.floor(Math.random()* 10));


    // console.log($randomDiv)
    if($randomDiv.text().length === 0) {
        $randomDiv.append(computer);
    } 

}

//CREATE function to mark the spot
const markSpot = (event) => {
    // console.log($(event.target));
    //DECLARE variable for targeted box
    let boxClicked = $(event.target);
    // console.log(boxClicked.text())
    //IF the length of text of that div is equal to Zero 
    if(boxClicked.text().length === 0) {
    boxClicked.append(playerOne);
    numPlayerMoves += 1;
    computerMove();
    }



    // console.log($(".messages").text());

    //Player move message logic
    // if($(".messages").text() === "Player One's Turn") {
    //     // $(".messages").empty();
    //     $(".messages").text("Player Two's Turn");
    // } else {
    //     $(".messages").text("Player One's Turn");
    // }

    winGame();
}

let playerOneWinMessage = "Congrats! Player One Wins!!";
let playerTwoWinMessage = "Congrats! Player Two Wins!!";

const playerOneWin = () => {
    if(
        $("#box5").text() === "X" && ($("#box5").text() === $("#box3").text() && $("#box5").text() === $("#box7").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#box5").text() === "X" && ($("#box5").text() === $("#box1").text() && $("#box5").text() === $("#box9").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#box5").text() === "X" && ($("#box5").text() === $("#box4").text() && $("#box5").text() === $("#box6").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#box2").text() === "X" && ($("#box2").text() === $("#box5").text() && $("#box2").text() === $("#box8").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#box2").text() === "X" && ($("#box2").text() === $("#box1").text() && $("#box2").text() === $("#box3").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#box1").text() === "X" && ($("#box1").text() === $("#box4").text() && $("#box1").text() === $("#box7").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } else if (
        $("#box3").text() === "X" && ($("#box3").text() === $("#box6").text() && $("#box3").text() === $("#box9").text())) {
        $(".messages").text(playerOneWinMessage);
        $("div").unbind();
    } 
    else if (
        $("#box7").text() === "X" && ($("#box7").text() === ($("#box8").text() && $("#box7").text() === $("#box9").text()))) {
            $(".messages").text(playerOneWinMessage);
            $("div").unbind();
        }
}

const playerTwoWin = () => {
    if(
        $("#box5").text() === "O" && ($("#box5").text() === $("#box3").text() && $("#box5").text() === $("#box7").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#box5").text() === "O" && ($("#box5").text() === $("#box1").text() && $("#box5").text() === $("#box9").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#box5").text() === "O" && ($("#box5").text() === $("#box4").text() && $("#box5").text() === $("#box6").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#box2").text() === "O" && ($("#box2").text() === $("#box5").text() && $("#box2").text() === $("#box8").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#box2").text() === "O" && ($("#box2").text() === $("#box1").text() && $("#box2").text() === $("#box2").text() === $("#box3").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#box1").text() === "O" && ($("#box1").text() === $("#box4").text() && $("#box1").text() === $("#box7").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } else if (
        $("#box3").text() === "O" && ($("#box3").text() === $("#box6").text() && $("#box3").text() === $("#box9").text())) {
        $(".messages").text(playerTwoWinMessage);
        $("div").unbind();
    } 
    else if (
        $("#box7").text() === "O" && ($("#box7").text() === $("#box8").text() && $("#box7").text() === $("#box9").text())) {
            $(".messages").text(playerTwoWinMessage);
            $("div").unbind();
        }
}


const winGame = () => {
    playerOneWin();
    playerTwoWin();
    if(numPlayerMoves === 5) {
        $(".messages").text("Tied Game!!!")
    }
}


$(() => {
    console.log("It's working!")
    generateGrid();
});