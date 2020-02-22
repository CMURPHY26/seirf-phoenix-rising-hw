require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

const pokemon = require("./models/pokemon.js")
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));






//NEW ROUTE
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs");
});



//SHOW ROUTE
app.get("/pokemon/:id", (req,res) => {
    res.render("show.ejs", {pokemon: pokemon[req.params.id]});
});

//INDEX ROUTE
app.get("/pokemon", (req, res) => {
    // res.send(pokemon);
    res.render("index.ejs", {pokemon: pokemon});
});

//ROOT REDIRECT
app.get("/", (req, res) => {
    res.redirect("/pokemon");
})


app.listen(port, () => {
    console.log("The server is running on port", port);
})