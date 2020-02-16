require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT;

const Budget = require("./models/budget.js");

app.use(express.static("public"));

app.get("/budgets", (req, res) => {
    res.render("index.ejs", { budget: Budget});
});






app.listen(port, () =>{
    console.log("The server is running on port", port);
    // console.log(budget)
})



