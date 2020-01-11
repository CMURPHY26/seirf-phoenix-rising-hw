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
            console.log(this.Math.floor(Math.random() * this.catchPhrases.length));
        }

        announce () {
            console.log(this.health);
        }

        fight () {
            console.log('I\'m ready to rumble');
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
        console.log(this.Math.floor(Math.random() * this.catchPhrases.length));
    }

    announceHealth () {
        console.log(this.health);
    }

    fight () {
        console.log('i\'m gonna flatten you like a slice of pepperoni!');
    }
}


const dougie = new Hero("Dougie");
console.log(dougie);

const pizzaRat = new Enemy("Pizza Rat");
console.log(pizzaRat);

