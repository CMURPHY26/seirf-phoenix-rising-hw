class Hamster {
    constructor (name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }

    wheelRun () {
        console.log("squeak squeak");
    }

    eatFood () {
        console.log("nibble nibble");
    }

    getPrice () {
        return this.price;
    }
}


class Person {
    constructor (name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName () {
        return this.name;
    }

    getAge () {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet () {
        console.log(`Hi ${this.name}! Nice to see you.`);
    }

    eat (numOfTimes) {
        this.weight += numOfTimes;
        this.mood +=numOfTimes;
    }

    exercise (numOfTimes) {
        this.weight -= numOfTimes;
    }

    ageUp (numOfYears) {
        this.age += numOfYears;
        this.height += numOfYears;
        this.weight += numOfYears;
        this.mood -= numOfYears;
        this.bankAccount += 10;
    }

    buyHamster (HamsterObject) {
        this.hamsters.push(HamsterObject);
        this.mood += 1;
        this.bankAccount -= HamsterObject.getPrice();
    }

}


// Instantiate a new Person named Timmy
const timmy = new Person("Timmy");
// console.log(timmy);

// Age Timmy five years
timmy.ageUp(5);
// console.log(timmy);


// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eat(5);
// console.log(timmy);


// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exercise(5);
// console.log(timmy);


// Age Timmy 9 years

timmy.ageUp(9);
// console.log(timmy);

// Create a hamster named "Gus"
const gus = new Hamster("Gus");

// console.log(gus);


// Set Gus's owner to the string "Timmy"

gus.owner = "Timmy";
// console.log(gus);


// Have Timmy "buy" Gus

timmy.buyHamster(gus);
// console.log(timmy);

// Age Timmy 15 years

timmy.ageUp(15);
// console.log(timmy);

// Have Timmy eat twice
timmy.eat(2);

// Have Timmy exercise twice

timmy.exercise(2);
console.log(timmy);
