<template>
   <HeaderPage />
  <div class="payment-form">
    <h1><u>Make Your Payment</u></h1>
    <!-- <pre>{{ products }}</pre> -->
    <table>
      <thead>
        <tr>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <div class="product-cardss">
              <div class="product-cardd">
                <img :src="product.image" :alt="product.name" class="product-imagee" />
              </div>
            </div>
          </td>
          <td>{{ product.name }}</td>
          <td>Rs. {{ product.price }}</td>
          <td class="quantity">
            <h3>{{ product.quantity}}</h3>
          </td>
          <td>Rs. {{ product.quantity * product.price }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4"><b>Total Price:</b></td>
          <td>
            <b>Rs. {{ $route.query.totalprice }}</b>
          </td>
        </tr>
      </tfoot>
    </table>

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
      <button class="submit"> Submit Payment</button>
    </form>
  </div>
</template>

<script>
import HeaderPage from "./HeaderPage.vue";
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';


export default {
  name: 'ViewPage',
  components: {
    HeaderPage,
  
  },

  data() {
    return {
      amount: this.$route.query.totalprice ,
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
        productName:[],
        quantity:[],
        totalamount:this.$route.query.totalprice,
        image:[],
        regid:localStorage.getItem('id'),
      },
      
    };
  },

  async created() {
    const stripeKey = 'pk_test_51MyssbSDGHtVQZySIS52lSuI50LnQ0SaLjo5WJ0mpzUPsBWnv3x9kDHOIFFSQIHt2Y964RDjsKfW7IvgLEr0JKEB00mpXj0jLn';
    const stripe = await loadStripe(stripeKey);
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    cardElement.mount('#card-element');
    this.stripe = stripe;
    this.cardElement = cardElement;

    const productsJson = this.$route.query.products
    this.products = JSON.parse(productsJson)

  },

  methods: {
    async submitPayment() {

      this.products.forEach(product => {
        this.details.productName.push(product.name);
        this.details.quantity.push(product.quantity);
        this.details.image.push(product.image);
      });

      const { data } = await axios.post('http://localhost:3000/create-payment-intent', {
        amount: this.amount,
      });

      const result = await this.stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: this.cardElement,
        },
      });

      if (result.error) {
        alert("Error Paying")
        console.error(result.error.message);
      } else {

        axios.post('http://localhost:9992/payment/detailsatonce',this.details)
        .then(
          ({data}) => {
            console.log(data)
          }
        )
        alert("Payment Successful")
        this.$router.push({name:'HomePage'})
        console.log(result.paymentIntent);
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
  h2{
    font-weight: bold;
    color: rgb(17, 0, 255);
  }
 .price{
  padding: 2%;
  color: red;
  font-weight: bold;
  font-size: 20px;
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
    background-color: #008CBA;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  button:hover {
    background-color: #005F6B;
  }
  .submit{
    margin-bottom: 5%;
  }

</style>