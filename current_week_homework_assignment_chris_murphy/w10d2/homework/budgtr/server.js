require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT;

const Budget = require("./models/budget.js");

app.use(express.static("public"));

app.get("/budgets/:id", (req, res) => {
    res.render("show.ejs", {budget: Budget[req.params.id]})
});

app.get("/budgets", (req, res) => {
    console.log(Budget);
    res.render("index.ejs", { budget: Budget });
});






app.listen(port, () =>{
    console.log("The server is running on port", port);
    // console.log(budget)
})



