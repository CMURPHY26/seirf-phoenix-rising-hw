require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;



app.get("/", (req, res) => {
    res.send("Welcome to the Pokemon App!");
});




app.listen(port, () => {
    console.log("The port is running on port:", port );
});