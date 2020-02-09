require('dotenv').config();

const express = require('express');

const app = express();

let port = process.env.PORT;

app.listen(port, () => {
    console.log("server is running on port " + port);
});

//Greetings
app.get('/greeting', (req, res)=> {
    res.send("Hello, stranger!");
});

app.get("/greeting/:name", (req, res) => {
    res.send("What's up, " + req.params.name + "? It's great to see you!!");
});

//Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
    let tip = Number(req.params.total) * (Number(req.params.tipPercentage) / 100);
    res.send("The tip is: " + tip);
});

