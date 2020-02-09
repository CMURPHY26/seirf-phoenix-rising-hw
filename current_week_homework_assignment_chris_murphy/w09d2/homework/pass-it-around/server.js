require('dotenv').config();

const express = require('express');

const app = express();

let port = process.env.PORT;

app.listen(port, () => {
    console.log("server is running on port " + port);
});

app.get("/", (req, res) => {
    res.send(`
    <h1>99 little bugs in the code</h1>
    <h2>99 little bugs</h2>
    <h3><a href='/98'>Take one down, patch it around.</a></h3>
    <h4>${Math.floor(Math.random() * 1000)} bugs in the code</h4>
    `);
});

app.get("/:number_of_bottles", (req,res) => {
    let numBottles = req.params.number_of_bottles;
    if(numBottles === "0") {
        res.send(`
        <h1>0 little bugs in the code</h1>
            <h3><a href='/'>Take one down, pass it around.</a></h3>
        `);
    } else {
    res.send(`
    <h1>${numBottles} little bugs in the code</h1>
    <h2>${numBottles} little bugs</h2>
    <h3><a href='${numBottles - 1}'>Take one down, patch it around.</a></h3>
    <h4>${Math.floor(Math.random() * 1000)} bugs in the code</h4>
    `);
    }
});


//Fibonacci


app.get("/fibonacci/:num", (req, res) => {
    let num = Number(req.params.num);

    const isFibonacci = (fibNum) => {
    
        const fibonacci_series = (n) => {
        if (n===1) 
        {
            return [0, 1];
        } 
        else 
        {
            let s = fibonacci_series(n - 1);
            s.push(s[s.length - 1] + s[s.length - 2]);
            return s;
        }
        };
    
        let fibonacciArray = fibonacci_series(100);
        console.log(fibonacciArray);
    
        let numInArray = fibonacciArray.filter( num => {
            if(num === fibNum) {
                return num;
            };
        });

        if (numInArray.length > 0) {
            res.send("Very good. It is Fibonacci.")
        } else {
            res.send("I can tell this is not a fibonacci number.");
        }

    
    
    };
    isFibonacci(num);
});


