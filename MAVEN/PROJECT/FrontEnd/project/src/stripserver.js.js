const express = require("express");
const cors = require("cors"); 
const app = express();
const path = require("path");
const stripe = require("stripe")("sk_test_51MyssbSDGHtVQZySytEbgSRXPGfE6Ck9sQo1K2B3CA1BShJsoNDKN0ruWPhlHRSUFvkaqWsjTdRkQ0KRNyyKG5th00U0JAsLZ6");
app.set('view engine', 'ejs');
const YOUR_DOMAIN = "http://localhost:8080";

// static files
app.use(express.static(path.join(__dirname, "views")));

// middleware
app.use(express.json());
app.use(cors()); 
app.get('/',(req,res) =>{
  res.render('checkout',{
    key : 'pk_test_51MyssbSDGHtVQZySIS52lSuI50LnQ0SaLjo5WJ0mpzUPsBWnv3x9kDHOIFFSQIHt2Y964RDjsKfW7IvgLEr0JKEB00mpXj0jLn'
  })
})

// routes
app.post("/payment", async (req, res) => {
    const { product } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: product.name,
                        images: [product.image],
                    },
                    unit_amount: product.amount * 100,
                },
                quantity: product.quantity,
            },
        ],
        mode: "payment",
        success_url: `${YOUR_DOMAIN}/success.ejs`,
        cancel_url: `${YOUR_DOMAIN}/cancel.ejs`,
    });

    res.json({ id: session.id });
});

// listening...
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));