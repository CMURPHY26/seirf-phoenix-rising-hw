
//CREATE USS Ship object - playersShip
//ADD properties and methods to object
//hull: 20; firepower: 5; accuracy: .7

const playerShip = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    attack: (enemyShip) => {
        console.log("Player attacking Alien ship!")
        //Check for hit success based on playerShip accuracy
        if(Math.random() <= playerShip.accuracy) {
            console.log("Attack hit!");
            enemyShip.hull -= playerShip.firepower;
        } else {
            console.log("Attack missed!")
        }
        console.log(enemyShip);
    }
}


//CREATE function to get random integer
const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(getRandomInteger(3,6));
// console.log(getRandomInteger(6, 8)*.1);

// DEFINE alien ship class
class AlienShip {
    constructor() {
        // random values
        this.hull = getRandomInteger(3, 6);
        //or this.hull = Math.floor((Math.random() * 4) + 3)
        this.firepower = getRandomInteger(2, 4);
        //or this.firepower = Math.floor((Math.random() * 3) + 2)
        this.accuracy = getRandomInteger(6, 8)*.1;
        //or this.accuracy = Math.floor((Math.random() * 3) + 6) * .1
    };
    
    attack = () => {
        console.log("Alien Ship attacking!")
        //Check for hit success based on alienShip accuracy
        if(Math.random() <= this.accuracy) {
            console.log("Alien ship hit player!");
            playerShip.hull -= this.firepower;
            console.log(`Player Ship hull remaining: ${playerShip.hull}`)
        } else {
            console.log("Alien ship missed!")
        }
    }
}


//Define a game Object
let gameState = {
    playerIsAlive: () => {
        //return true if player is alive
        return playerShip.hull > 0;
    },
    checkWin: () => {
        if(enemies.length <= 0) {
            console.log("Congrats, you've won!");
        }
    }
}

//checkWin logic


//Start the game
//CREATE alien ships
console.log("Generating alien ships")
// let enemy = new AlienShip();

//TODO: Upgrade to an arry of 6 enemy ships
const enemies = [];

for (let i = 0; i < 6; i++){
    enemies.push(new AlienShip());
}

console.log(enemies);

//TODO: add boolean to include if enemies.length > 0
while(gameState.playerIsAlive()) {

    //Turn by turn logic
    //playerShip attacks:
    playerShip.attack(enemies[0]);
    
    //Check if enemy ship is destroyed
    if(enemies[0].hull <= 0) {
        //If enemy ship is destroyed:
        console.log("Enemy ship destroyed");
        enemies.shift();
        
        gameState.checkWin();
        
        //Ask user if they want to continue attacking or retreat
        // if (enemies.length > 0){
            let response = prompt("Ship Destroyed, attack or retreat?");
            
            if (response === "retreat") {
                //User retreats end game loop
                alert("You retreated, game over");
                break;
            } else if (response === "attack") {
                console.log("Continuing gameplay");
            }
        // }
    } else {
        //Enemy ship not destroyed, their turn to attack
        //Enemy ship attacks:
        enemies[0].attack();
    }

}




//Battle
//End game logic
//Player either lost or retreated
console.log("Game Over");