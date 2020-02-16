require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;

const pokemon = require("./models/pokemon.js");


app.get("/pokemon", (req, res) => {
    res.send(pokemon);
});


app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
});





app.listen(port, () => {
    console.log("The port is running on port:", port );
});