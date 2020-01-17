//DOM CONSOLE
let dOMConsole = document.querySelector(".console");

const ussChris = {
    name: "USS Chris",
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attack: (enemy) => {
        if(Math.random() <= ussChris.accuracy) {
            console.log("USS Chris attacking Alien Ship!");
            enemy.hull -= ussChris.firepower;
        } else {
            console.log("USS Chris attack missed Alien Ship!")
        }
    }
}

class AlienShip {
    constructor() {
        this.hull = Math.floor((Math.random() * 4) + 3);
        this.firepower = Math.floor((Math.random() * 3) + 2 );
        this.accuracy = (Math.floor(Math.random() * 3) + 6) * .1; 
    }

    attack = (playerShip) => {
        if(Math.random() <= this.accuracy) {
            console.log("Alien Ship attacking USS Chris!")
            playerShip.hull -= this.firepower;
        } else {
            console.log("Alien Ship attack missed USS Chris!")
        }
    }
}


// //CREATE one enemy ship for testing
// let enemy = new AlienShip();
// console.log(enemy);


// Enemy Ship Array
const enemies = [];

for (let i = 0; i < 6; i += 1) {
    enemies.push(new AlienShip());
}

console.log(enemies);



//ATTACK BUTTON LOGIC
const attackButton = () => {
    // document.querySelector("#attack").addEventListener("click", attackButton);
    if(enemies.length > 0) {
        ussChris.attack(enemies[0]);
        
        if(enemies[0].hull <= 0) {
            // enemies[0].hull === 0;
            enemies.shift();
            console.log("Alien Ship Destroyed!");
        } else {
            console.log(enemies[0]);
            enemies[0].attack(ussChris);
            console.log(ussChris.name, ussChris);
        }
    }
};

//RETREAT BUTTON
const retreatButton = () => {
    // document.querySelector("#retreat").addEventListener("click", retreatButton);
    console.log("Game Over!");
};


//GAME OBJECT
const gameState = {
    playerScore: () => {
        
    }
}


//START GAME
const startGame = () => {
    //code goes here
}

// BATTLE LOGIC
const battleRound = () => {
    if (enemies.length === 0) {
        console.log("Congratulations, you have won the game!");
    }
}

battleRound();


