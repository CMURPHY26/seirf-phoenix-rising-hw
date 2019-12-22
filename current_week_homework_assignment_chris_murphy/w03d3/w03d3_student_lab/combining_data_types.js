
  ////////////////////////
 ///Combining datatypes
/////////////////////////


// Given the following object, call the jump method

const person = {
    jump: () => {
        console.log('fly!');
    }
};

console.log(person.jump());


// Call the drive method

const generateCar = ()=>{
    return {
        drive(){
            console.log("Vroom");
        }
    }
}

console.log(generateCar().drive());
// Log the message attribute

const account = {
    tweet: () => {
        return {
            message: "fun"
        }
    }
}

console.log(account.tweet().message);


// Log the second element in the array

const me = {
    foo: () =>{
        return {
            array: [2.5, 7, true]
        }
    }
}

console.log(me.foo().array[1]);

// Create a data structure such that the following code logs "boat":

const baz = {
    //or foo: function() {}
    foo: () => {
        return { matt: {
            travel: "boat"
        }
    }
    }
}

console.log(baz.foo().matt.travel);
// Create a data structure such that the following code executes without error:
const factory = {
    createCar: () => {
        return {startEngine:() => {
            console.log("Engine Started!");
        }
    }
    }
}
factory.createCar().startEngine();

// Run the inner function:

const matt = {
    blink: () =>{
        return ()=>{
            console.log('hi')
        }
    }
}

matt.blink()();

// Call the funStuff() method:

const list = [
    'dogs',
    false,
    3.5,
    ()=>{
        return {
            funStuff: ()=>{
                console.log('yaaassss');
            }
        }
    }
];

list[3]().funStuff();
// Call the most inner function:

const foo = [
    'asdfasdf',
    'matt',
    false,
    6,
    ()=>{
        return ()=>{
            console.log('yes!');
        }
    },
    {
        dog:'blue'
    }
];

foo[4]()();