<template>
  <HeaderPage />
  <div class="payment-form">
    <h1><u>Make Your Payment</u></h1>

    <div class="product-cards_cart">
      <div class="product-card_cart">
        <img :src="image" alt="Selected image" class="product-image_cart" />
      </div>
      <div class="details">
        <h3>{{ $route.query.proname }}</h3>
        <p>Quantity:- {{ $route.query.quantityy }}</p>
        <h3>Total Price Rs:- {{ $route.query.totalprice }}</h3>
      </div>
    </div>

    <form @submit.prevent="submitPayment">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="details.name" /><br />

      <label for="line1">Address - Line 1:</label>
      <input type="text" id="line1" v-model="details.line1" /><br />

      <label for="city">City:</label>
      <input type="text" id="city" v-model="details.city" /><br />

      <label for="district">District:</label>
      <input type="text" id="district" v-model="details.district" /><br />

      <label for="country">Country:</label>
      <input type="text" id="country" v-model="details.country" /><br />

      <div id="card-element" class="card-element"></div>
      <button class="submit">Submit Payment</button>
    </form>
  </div>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
// import { StripeElements, StripeCard } from '@vue-stripe/vue-stripe';

export default {
  name: "ViewPage",
  components: {
    HeaderPage,
    // StripeElements,
    // StripeCard,
  },
  computed: {
    image() {
      return this.$route.query.images;
    },
  },
  data() {
    return {
      amount: this.$route.query.totalprice,
      stripe: null,
      cardElement: null,
      products: [],
      details:{
        name: "",
        line1: "",
        city: "",
        country: "",
        district: "",
        date: new Date().toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true  }),
        productName:this.$route.query.proname,
        quantity:this.$route.query.quantityy,
        totalamount:this.$route.query.totalprice,
        image:this.$route.query.images,
        regid:localStorage.getItem('id'),
      },
    };
  },

  async created() {
    const stripeKey =
      "pk_test_51MyssbSDGHtVQZySIS52lSuI50LnQ0SaLjo5WJ0mpzUPsBWnv3x9kDHOIFFSQIHt2Y964RDjsKfW7IvgLEr0JKEB00mpXj0jLn";
    const stripe = await loadStripe(stripeKey);
    const elements = stripe.elements();
    const cardElement = elements.create("card");
    cardElement.mount("#card-element");
    this.stripe = stripe;
    this.cardElement = cardElement;

    const productsJson = this.$route.query.products;
    this.products = JSON.parse(productsJson);
  },

  methods: {
    async submitPayment() {

      const { data } = await axios.post("http://localhost:3000/create-payment-intent", {
        amount: this.amount,
      });

      const result = await this.stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: this.cardElement,
        },
      });

      if (result.error) {
        console.error(result.error.message);
        alert("Error Paying");
      } else {
        console.log(result.paymentIntent);

        axios.post('http://localhost:9992/payment/details',this.details)
        .then(
          ({data}) => {
           console.log(data)
          }
        )
        alert("Payment Successful");
        this.$router.push({ name: "HomePage" });
      }
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  margin-top: 1%;
  margin-bottom: 5%;
}

label {
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}
.payment-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.card-element {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;
  width: 400px;
  margin-top: 8%;
}
button {
  padding: 10px;
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
button:hover {
  background-color: #005f6b;
}
.submit {
  margin-bottom: 5%;
}

.product-cards_cart {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 1.5%;
  margin-top: 1%;
}

.product-card_cart {
  border: 1px solid #ccc;
  padding: 10px;
  width: 210px;
  height: calc(50% / 3 - 10px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image_cart {
  width: 200px;
  max-height: 250px;
  object-fit: contain;
  margin-bottom: 10px;
}
</style>
