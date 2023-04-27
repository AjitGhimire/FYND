const express = require('express');
const app = express();
const cors = require("cors"); 
const stripe = require('stripe')('sk_test_51MyssbSDGHtVQZySytEbgSRXPGfE6Ck9sQo1K2B3CA1BShJsoNDKN0ruWPhlHRSUFvkaqWsjTdRkQ0KRNyyKG5th00U0JAsLZ6');

app.use(express.json());
app.use(cors()); 
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'inr',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
