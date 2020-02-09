require('dotenv').config();

const express = require('express');

const app = express();

let port = process.env.PORT;

app.listen(port, () => {
    console.log("server is running on port " + port);
});

app.get('/greeting', (req, res)=> {
    res.send("Hello, stranger!");
});

app.get("/greeting/:name", (req, res) => {
    res.send("What's up, " + req.params.name + "? It's great to see you!!");
});