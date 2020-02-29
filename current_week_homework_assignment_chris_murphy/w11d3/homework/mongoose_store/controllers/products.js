const express = require('express');
const router = express.Router();


const Product = require("../models/products.js");

//ROUTES
//SEED DATA ROUTE
router.get('/seed', async (req, res) => {
    const newProducts =
      [
        {
          name: 'Beans',
          description: 'A small pile of beans. Buy more beans for a big pile of beans.',
          img: 'https://cdn3.bigcommerce.com/s-a6pgxdjc7w/products/1075/images/967/416130__50605.1467418920.1280.1280.jpg?c=2',
          price: 5,
          qty: 99
        }, {
          name: 'Bones',
          description: 'It\'s just a bag of bones.',
          img: 'http://bluelips.com/prod_images_large/bones1.jpg',
          price: 25,
          qty: 0
        }, {
          name: 'Bins',
          description: 'A stack of colorful bins for your beans and bones.',
          img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
          price: 7000,
          qty: 1
        }
      ]
  
    try {
      const seedItems = await Product.create(newProducts)
      res.redirect("/products")
    } catch (err) {
      res.send(err.message)
    }
  })


//NEW ROUTE
router.get("/new", (req,res) => {
    res.render("new.ejs");
});

//CREATE ROUTE
router.post("/", (req, res) => {
    Product.create(req.body, (error, result) => {
      res.redirect(`/products/`);
    })

});


//EDIT ROUTE
router.get("/:id/edit", (req, res) => {
  Product.findById(req.params.id, (err, product) =>{
    res.render("edit.ejs", {id: req.params.id})
  })
})


//UPDATE ROUTE
router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel) => {
    // res.send(updatedModel);
    res.redirect(`/products/${updatedModel.id}`);
  })
});

//BUY ROUTE
router.put("/:id/buy", (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        product.qty -= 1;
        Product.findByIdAndUpdate(req.params.id, product, (err, updatedProduct) => {
          res.redirect(`/products/${req.params.id}`);
        })
    })
});

//SHOW ROUTE
router.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, product) =>{
        res.render("show.ejs", {product: product, id: req.params.id});
    })
});


//INDEX ROUTE
router.get("/", (req, res) => {
    Product.find( {}, (err, products) => {
        // console.log(products);
        res.render("index.ejs", {products: products});
    })
});

//DELETE ROUTE
router.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/products");
  })
});



module.exports = router;