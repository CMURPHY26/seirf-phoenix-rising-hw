console.log("It's working!");


//toolArray array container for tool objects
const toolArray = [
    //tool object with type, income and cost keys
    {type: "teeth", income: 1, cost: 0},
    {type: "pair of rusty scissors", income: 5, cost: 5},
    {type: "old-timey push lawnmower", income: 50, cost: 25},
    {type: "fancy battery-powered lawnmower", income: 100, cost: 250},
    {type: "team of starving students", income: 250, cost: 500},
]

//landscaperBusiness object that holds and updates the game state
const landscaperBusiness = {
    tool: "teeth",
    money: 0
}

//start the game with an alert that notifies the user that they started a 
//business, current tool and the current money in the bank.

const startAlert = () => {
    alert(`You have started a landscaping business and your current tool is ${landscaperBusiness.tool} and you have $${landscaperBusiness.money} in the bank.`)
}

startAlert();

//updates the page with the current tool listed.
document.querySelector('#tool').innerHTML = `Current Tool: ${landscaperBusiness.tool}`;

// document.querySelector('#money').innerHTML = `Bank Account: $${landscaperBusiness.money}`;

//function addMoney use switch statement that checks the current tool 
//in the landscaper object and depending on the tool, adds that tool's income
// to the money key in the landscaperBusiness object
//to be used on a click event on a cut lawn button
const addMoney = () => {
    switch(landscaperBusiness.tool) {
        case "teeth":
            landscaperBusiness.money += toolArray[0].income;
            break;
        case "pair of rusty scissors":
            landscaperBusiness.money += toolArray[1].income;
            break;
        case "old-timey push lawnmower":
            landscaperBusiness.money += toolArray[2].income;
            break;
        case "fancy battery-powered lawnmower":
            landscaperBusiness.money += toolArray[3].income;
            break;
        case "team of starving students":
            landscaperBusiness.money += toolArray[4].income;
            break;
        default:
            landscaperBusiness.money += 0;
    }
}


//function buyTool prompts user asking which tool to buy and then depending
// on the tool requested, the switch statement checks first if the money
//available in the landscaperBusiness object is greater than or equal to the 
//cost of the tool. If it is then subtract the cost of the tool from the 
//landscaperBusiness object money key and update the tool in the object, 
//else alert user that they do not have enough money
//to be used on a buy tool button with a click event
const buyTool = () => {
    let toolRequested = prompt("Which tool do you want to buy?");
    switch(toolRequested) {
        case "teeth":
            landscaperBusiness.money -= toolArray[0].cost;
            landscaperBusiness.tool = toolArray[0].type;
            break;
        case "pair of rusty scissors":
            if(landscaperBusiness.money >= 5) {
            landscaperBusiness.money -= toolArray[1].cost;
            landscaperBusiness.tool = toolArray[1].type;
            } else {
                alert("You do not have enough money in your bank account! Keep Cutting!!!")
            }
            break;
        case "old-timey push lawnmower":
            if(landscaperBusiness.money >= 25) {
            landscaperBusiness.money -= toolArray[2].cost;
            landscaperBusiness.tool = toolArray[2].type;
            } else {
                alert("You do not have enough money in your bank account! Keep Cutting!!!")
            }
            break;
        case "fancy battery-powered lawnmower":
            if(landscaperBusiness.money >= 250) {
            landscaperBusiness.money -= toolArray[3].cost;
            landscaperBusiness.tool = toolArray[3].type;
            } else {
                alert("You do not have enough money in your bank account! Keep Cutting!!!")
            }   
            break;
        case "team of starving students":
            if(landscaperBusiness.money >= 500) {
            landscaperBusiness.money -= toolArray[4].cost;
            landscaperBusiness.tool = toolArray[4].type;
            } else {
                alert("You do not have enough money in your bank account! Keep Cutting!!!")
            }       
            break;
        default:
            landscaperBusiness.money -= 0;
    }
//after tool is purchased update bank account and current tool on screen
    document.querySelector('#money').innerHTML = `Bank Account: $${landscaperBusiness.money}`;
    document.querySelector('#tool').innerHTML = `Current Tool: ${landscaperBusiness.tool}`;

}


//cut lawn function checks if the money in the object is greater than or equal
// to 0 and it is less than 1000, call addMoney function that adds money 
// depending on the tool selected and updates bank account and checks if the money is greater than or equal to 1000 then add congrats message
const cutLawn = () => {
        if(landscaperBusiness.money >= 0 && landscaperBusiness.money < 10){
            addMoney();
            document.querySelector('#money').innerHTML = `Bank Account: $${landscaperBusiness.money}`;
            if(landscaperBusiness.money >= 10) {
                document.querySelector("#congrats").innerHTML = "<h3>Congratulations! You have won the game!!";
            }
    } else {
        return;
    }
}





// linked to a click event on a button to reset the game to original landscaperBusiness object start state

const resetGame = () => {
    document.querySelector("#congrats").innerHTML = ""
    landscaperBusiness.money = 0;
    document.querySelector('#money').innerHTML = `Bank Account: $${landscaperBusiness.money}`;
    landscaperBusiness.tool = "teeth";
    document.querySelector('#tool').innerHTML = `Current Tool: ${landscaperBusiness.tool}`;
};






// const gameWin = () => {
//     if(landscaperBusiness.money >= 10 && landscaperBusiness.tool === "team of starving students") {
//         console.log('you won!');
//         alert("Congratulations!! You have won the game!");
//         resetGame();
//     }
// };


// gameWin();