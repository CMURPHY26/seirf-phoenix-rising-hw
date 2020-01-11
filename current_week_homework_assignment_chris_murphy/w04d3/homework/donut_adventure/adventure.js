// console.log("It's working");

// The Adventure of Dougie the Donut on the Streets of NYC.

// Dougie is a funky fresh donut who has decided to walk his way from the Flat Iron District to Times Square where he wants to show off his sweet moves. Along the way, Dougie is approached by his arch nemesis Pizza Rat. Sometimes they fight, sometimes they just talk smack at each other. Anyway that it goes, let's try to get Dougie safely to Times Square!


// For this section of the homework, you'll be making two objects that will interact. First we will create a Hero class, then an Enemy class, and instantiate our two objects from those classes.

  ////////////////////
 //// Our Hero
///////////////////

class Hero {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        }
        this.catchPhrases = ['i\'m fresher than day old pizza', 
        'you can\'t count my calories'];
         }
        talkSass () {
           let randomMessage = this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
            
            return randomMessage;
        }

        announceHealth () {
            return this.health;
        }

        fight (opponent) {
            console.log(`${this.name}: I\'m ready to rumble`);
            let keys = Object.keys(this.weapons);
            
            console.log (`${this.name}'s weapon is: ${keys[1]} \n Total hit points: ${this.weapons.sugarShock}`);

            opponent.health -= this.weapons.sugarShock;

            console.log(`${opponent.name} got hit by ${keys[1]}! His health is now at ${opponent.announceHealth()}!`)

        }
    }



class Enemy {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10    
        }
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer'];
         }
        
        talkSmack () {
            let randomMessage = this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
            
            return randomMessage;
    }

    announceHealth () {
        return this.health;
    }

    fight (opponent) {
        console.log(`${this.name}: i\'m gonna flatten you like a slice of pepperoni!`);
        let keys = Object.keys(this.weapons);
        
        console.log (`${this.name}'s weapon is: ${keys[1]} \n Total hit points: ${this.weapons.cheeseGrease}`);

        opponent.health -= this.weapons.cheeseGrease;

        console.log(`${opponent.name} got hit by ${keys[1]}! His health is now at ${opponent.announceHealth()}!`)
    }
}


const dougie = new Hero("Dougie");
// console.log(dougie);

const pizzaRat = new Enemy("Pizza Rat");
// console.log(pizzaRat);


// Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!

// Have Dougie talkSass
console.log(`Dougie: ${dougie.talkSass()}`);

// Have Pizza Rat talkSmack
console.log(`PizzaRat: ${pizzaRat.talkSmack()}`);

// Have Dougie announceHealth
console.log(`Dougie's Health: ${dougie.announceHealth()}`);

// Have Pizza Rat announceHealth
console.log(`PizzaRat's Health: ${pizzaRat.announceHealth()}`);

// Fight!
// Things have escalated between Dougie and Pizza Rat!

// Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
// dougie.fight();
// pizzaRat.fight();


// Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.fight(pizzaRat))


// Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health.



// Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)


// Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')



// Now, they can fight!
// Have Pizza Rat fight Dougie
pizzaRat.fight(dougie);




// Have Dougie fight Pizza Rat
dougie.fight(pizzaRat);

// Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!



