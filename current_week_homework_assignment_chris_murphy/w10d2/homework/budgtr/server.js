require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT;

const Budget = require("./models/budget.js");

app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

app.get("/budgets", (req, res) => {
    console.log(Budget);
    res.render("index.ejs", { budget: Budget });
});

app.post("/budgets/", (req, res) => {
    let budgetItem = req.body;
    console.log(budgetItem);
    Budget.push(budgetItem);
    res.redirect("/budgets/");
});

app.get("/budgets/new", (req, res) => {
    res.render("new.ejs");
});


app.get("/budgets/:id", (req, res) => {
    res.render("show.ejs", {budget: Budget[req.params.id]})
});








app.listen(port, () =>{
    console.log("The server is running on port", port);
    // console.log(budget)
})



