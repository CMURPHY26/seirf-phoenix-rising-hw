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

//Magic 8 Ball
const m8Ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get("/magic/:question", (req, res) => {
    let randomMessage = m8Ball[(Math.floor(Math.random() * m8Ball.length))];
    res.send(`<h1>
                ${req.params.question}
              </h1>
              <h1>
                ${randomMessage};
              </h1>
    `);
});