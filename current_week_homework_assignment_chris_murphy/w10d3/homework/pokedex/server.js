require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const methodOverride = require("method-override");

const pokemon = require("./models/pokemon.js")
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));


//NEW ROUTE
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs");
});

//EDIT ROUTE
app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs", {pokemon: pokemon[req.params.id], index: req.params.id});
});


//SHOW ROUTE
app.get("/pokemon/:id", (req,res) => {
    res.render("show.ejs", {pokemon: pokemon[req.params.id]});
});


//DESTROY ROUTE
app.delete("/pokemon/:id", (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect("/pokemon");
});

//CREATE ROUTE
app.post("/pokemon", (req, res) => {
    let type = req.body.type;
    if ( type.includes(",")) {
       type = type.split(",");
    } else if (type.includes(", ")) {
        type = type.split(", ");
    } else {
       type = [req.body.type];
    }
    let stats = {hp: req.body.hp, attack: req.body.attack, defense: req.body.defense};
    req.body.type = type;
    req.body.stats = stats;
    pokemon.push(req.body);
    res.redirect("/pokemon");
})


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