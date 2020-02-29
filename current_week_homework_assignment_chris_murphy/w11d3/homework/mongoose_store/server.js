require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;
const mongoose = require('mongoose');
const methodOverride = require("method-override");
const productsController = require('./controllers/products.js');

mongoose.connect('mongodb://localhost:27017/productsdb', { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});


app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use('/products', productsController);


//ROOT REDIRECT ROUTE
app.get("/", (req, res) => {
  res.redirect("/products")
})


app.listen(port, () =>{
    console.log("The server is running on port", port);
})