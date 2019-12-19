console.log("It's working!");

const toolArray = []

const landscaperBusiness = {
    tool: "teeth",
    money: 0
}

const addMoney = () => {
    switch(landscaperBusiness.tool) {
        case "teeth":
            landscaperBusiness.money += 1;
            break;
        case "rusty scissors":
            landscaperBusiness.money += 5;
            break;
        case "old-timey push lawnmower":
            landscaperBusiness.money += 50;
            break;
        case "fancy battery-powered lawnmower":
            landscaperBusiness.money += 100;
            break;
        case "team of starving students":
            landscaperBusiness.money += 250;
            break;
        default:
            landscaperBusiness.money += 0;
    }
}

const buyTool = () => {
    switch(landscaperBusiness.tool) {
        case "rusty scissors":
            landscaperBusiness.money -= 5;
            break;
        case "old-timey push lawnmower":
            landscaperBusiness.money -= 25;
            break;
        case "fancy battery-powered lawnmower":
            landscaperBusiness.money -= 250;
            break;
        case "team of starving students":
            landscaperBusiness.money += 500;
            break;
        default:
            landscaperBusiness.money -= 0;
    }
}

const startAlert = () => {
    alert(`You have started a landscaping business and your current tool is ${landscaperBusiness.tool} and you have $${landscaperBusiness.money} in the bank.`)
}

startAlert();

const cutLawn = () => {
    while (landscaperBusiness.money >= 0 && landscaperBusiness.money < 1000){
        let doWork = prompt("Do you want to cut the lawn to earn money?");
        if (doWork === "yes") {
            addMoney();
            alert(`Your bank account now has $${landscaperBusiness.money}`)
        } else {
            return 
        }
    }
}

cutLawn();

