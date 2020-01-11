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

    eat () {
        this.weight += 1;
        this.mood +=1;
    }

    exercise () {
        this.weight -= 1;
    }

    ageUp () {
        this.age += 1;
        this.height += 1;
        this.weight += 1;
        this.mood -= 1;
        this.bankAccount += 10;
    }

    buyHamster (HamsterObject) {
        this.hamsters.push(HamsterObject);
        this.mood += 1;
        this.bankAccount -= HamsterObject.getPrice();
    }

}