const express = require('express');
const router = express.Router();


const Product = require("../models/products.js");


const imgArray = ["","","","http://pngimg.com/uploads/guitar/guitar_PNG3342.png","http://pngimg.com/uploads/guitar/guitar_PNG3339.png","http://pngimg.com/uploads/guitar/guitar_PNG3367.png","http://pngimg.com/uploads/guitar/guitar_PNG3371.png"];

//ROUTES
//SEED DATA ROUTE
router.get('/seed', async (req, res) => {
    const newProducts =
      [
        {
          name: 'Guitar 1',
          description: "Subway tile disrupt vinyl, etsy shaman meggings fingerstache swag. Leggings bicycle rights austin, pickled lomo cornhole plaid gochujang kogi humblebrag franzen pabst four loko. Bicycle rights mlkshk portland gentrify, gochujang 90's selvage. Selvage pug master cleanse biodiesel tilde try-hard bushwick fingerstache activated charcoal beard squid man braid gentrify photo booth. Vinyl post-ironic dreamcatcher iceland.",
          img: 'http://pngimg.com/uploads/guitar/guitar_PNG3349.png',
          price: 550,
          qty: 10
        }, {
          name: 'Guitar 2',
          description: "Tumeric chillwave yuccie coloring book, lyft YOLO vaporware etsy adaptogen. Occupy woke tumeric put a bird on it typewriter waistcoat iPhone air plant forage pour-over fanny pack vice freegan. Helvetica succulents typewriter banh mi tumeric pickled. Keffiyeh health goth irony yuccie pop-up letterpress bushwick tofu pug fashion axe retro hoodie selvage. VHS vaporware next level readymade craft beer. Salvia man braid PBR&B, sriracha dreamcatcher +1 scenester freegan cred literally meggings.",
          img: 'http://pngimg.com/uploads/guitar/guitar_PNG3346.png',
          price: 800,
          qty: 0
        }, {
          name: 'Guitar 3',
          description: "Distillery marfa plaid, williamsburg man braid af locavore salvia hammock XOXO organic fam letterpress deep v. Venmo asymmetrical master cleanse taiyaki. Knausgaard pop-up slow-carb YOLO four loko bicycle rights narwhal leggings migas next level forage. Lyft everyday carry tumeric coloring book. Hella 3 wolf moon venmo, poutine chartreuse craft beer banh mi chia. Readymade cold-pressed freegan brunch street art.",
          img: 'http://pngimg.com/uploads/guitar/guitar_PNG3340.png',
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
    res.render("edit.ejs", {id: req.params.id, product: product})
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