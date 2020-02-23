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

//UPDATE ROUTE
app.put("/pokemon/:id", (req, res) => {
    let index = req.params.id;
    const stats = {hp: req.body.hp, attack: req.body.attack, defense: req.body.defense};

    let type = req.body.type;
    if ( type.includes(",")) {
       type = type.split(",");
    } else if (type.includes(", ")) {
        type = type.split(", ");
    } else {
       type = [req.body.type];
    }
    if(!req.body.img) {
        req.body.img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/detective-pikachu-pokemon-1551188658.jpg?crop=0.416xw:1.00xh;0.360xw,0&resize=480:*";
    }

    const pokeObject = {id: req.body.id, type: type, img: req.body.img, name: req.body.name, stats: stats}
    pokemon[req.params.id] = pokeObject;
    res.redirect(`/pokemon/${index}`);
});


//SHOW ROUTE
app.get("/pokemon/:id", (req,res) => {
    res.render("show.ejs", {pokemon: pokemon[req.params.id], index: req.params.id});
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
    if(!req.body.img) {
        req.body.img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/detective-pikachu-pokemon-1551188658.jpg?crop=0.416xw:1.00xh;0.360xw,0&resize=480:*";
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