require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;

const pokemon = require("./models/pokemon.js");

app.use(express.static('public'));

app.get("/pokemon", (req, res) => {
    res.render("index.ejs");
});


app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
});





app.listen(port, () => {
    console.log("The port is running on port:", port );
});