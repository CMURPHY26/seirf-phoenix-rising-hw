console.log("It's working!");

const toolArray = [
    {type: "teeth", income: 1, cost: 0},
    {type: "pair of rusty scissors", income: 5, cost: 5},
    {type: "old-timey push lawnmower", income: 50, cost: 25},
    {type: "fancy battery-powered lawnmower", income: 100, cost: 250},
    {type: "team of starving students", income: 250, cost: 500},
]

const landscaperBusiness = {
    tool: "teeth",
    money: 0
}

document.querySelector('#tool').innerHTML = `Current Tool: ${landscaperBusiness.tool}`;

// document.querySelector('#money').innerHTML = `Bank Account: $${landscaperBusiness.money}`;

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

    document.querySelector('#money').innerHTML = `Bank Account: $${landscaperBusiness.money}`;
    document.querySelector('#tool').innerHTML = `Current Tool: ${landscaperBusiness.tool}`;

}


const startAlert = () => {
    alert(`You have started a landscaping business and your current tool is ${landscaperBusiness.tool} and you have $${landscaperBusiness.money} in the bank.`)
}

startAlert();

//////ORIGINAL cutLawn function
//////////////////////////
// const cutLawn = () => {
//     while (landscaperBusiness.money >= 0 && landscaperBusiness.money < 1000){
//         let doWork = prompt("Do you want to cut the lawn to earn money?");
//         if (doWork === "yes") {
//             addMoney();
//             document.querySelector('#money').innerHTML = `Bank Account: $${landscaperBusiness.money}`;
//             // alert(`Your bank account now has $${landscaperBusiness.money}`)
//         } else {
//             return 
//         }
//     }
// }

// cutLawn();

const cutLawn = () => {
        if(landscaperBusiness.money >= 0 && landscaperBusiness.money < 1000){
            addMoney();
            document.querySelector('#money').innerHTML = `Bank Account: $${landscaperBusiness.money}`;
    }
}




const resetGame = () => {
    landscaperBusiness.money = 0;
    document.querySelector('#money').innerHTML = `Bank Account: $${landscaperBusiness.money}`;
    landscaperBusiness.tool = "teeth";
    document.querySelector('#tool').innerHTML = `Current Tool: ${landscaperBusiness.tool}`;
};


const gameWin = () => {
    if(landscaperBusiness.money >= 1000 && landscaperBusiness.tool === "team of starving students") {
        alert("Congratulations!! You have won the game!");
        resetGame();
    }
};


gameWin();