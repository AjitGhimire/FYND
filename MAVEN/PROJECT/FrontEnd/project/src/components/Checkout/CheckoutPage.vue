<template>
  <HeaderPage/>
<div class="payment-page">
  <h2>Product Name:- {{ $route.query.namee }}</h2>
  <h2>Product Quantity:- {{ $route.query.quantityy }}</h2>
  <h1 class="payment-title">Payment</h1>
  <div class="payment-box">
    <div class="payment-option">
      <div class="payment-option-header">
        <input
          type="radio"
          name="payment-option"
          id="credit-card"
          value="credit-card"
          v-model="selectedOption"
        />
        <label for="credit-card">Credit Card</label>
      </div>
      <div class="payment-option-body" v-show="selectedOption === 'credit-card'">
        <div class="card-number">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" v-model="cardNumber" required />
        </div>
        <div class="card-details">
          <div class="card-name">
            <label for="card-name">Cardholder Name</label>
            <input type="text" id="card-name" v-model="cardName" required />
          </div>
          <div class="card-expiry">
            <label for="card-expiry">Expiry Date</label>
            <input type="text" id="card-expiry" v-model="expiryDate" required />
          </div>
          <div class="card-cvv">
            <label for="card-cvv">CVV</label>
            <input type="text" id="card-cvv" v-model="cvv" required />
          </div>
        </div>
      </div>
    </div>
    <div class="payment-option">
      <div class="payment-option-header">
        <input
          type="radio"
          name="payment-option"
          id="debit-card"
          value="debit-card"
          v-model="selectedOption"
        />
        <label for="debit-card">Debit Card</label>
      </div>
      <div class="payment-option-body" v-show="selectedOption === 'debit-card'">
        <div class="card-number">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" v-model="cardNumber" required />
        </div>
        <div class="card-details">
          <div class="card-name">
            <label for="card-name">Cardholder Name</label>
            <input type="text" id="card-name" v-model="cardName" required />
          </div>
          <div class="card-expiry">
            <label for="card-expiry">Expiry Date</label>
            <input type="text" id="card-expiry" v-model="expiryDate" required />
          </div>
          <div class="card-cvv">
            <label for="card-cvv">CVV</label>
            <input type="text" id="card-cvv" v-model="cvv" required />
          </div>
        </div>
      </div>
    </div>
    <div class="payment-option">
      <div class="payment-option-header">
        <input
          type="radio"
          name="payment-option"
          id="net-banking"
          value="net-banking"
          v-model="selectedOption"
        />
        <label for="net-banking">Net Banking</label>
      </div>
      <div class="payment-option-body" v-show="selectedOption === 'net-banking'">
        <div class="bank-list">
          <select name="bank-list" id="bank-list">
            <option value="">Select your bank</option>
            <option value="axis-bank">Axis Bank</option>
            <option value="hdfc-bank">HDFC Bank</option>
            <option value="icici-bank">ICICI Bank</option>
            <option value="sbi">State Bank of India</option>
          </select>
        </div>
      </div>
    </div>
    <div class="payment-option">
      <div class="payment-option-header">
        <input
          type="radio"
          name="payment-option"
          id="upi"
          value="upi"
          v-model="selectedOption"
        />
        <label for="upi">UPI</label>
      </div>
      <div class="payment-option-body" v-show="selectedOption === 'upi'">
        <div class="upi-details">
          <div class="upi-id">
            <label for="upi-id">UPI ID</label>
            <input type="text" id="upi-id" v-model="upiId" required />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="total-amount">
    <p>Total Amount: {{ $route.query.pricee }}</p>
  </div>
  <div class="proceed-to-pay">
    <button type="button" @click="submitPayment">Proceed to Pay</button>
  </div>
</div>
</template>

<script>
import HeaderPage from '../HeaderPage.vue'
export default {
name: "CheckoutPage",
components: {
      HeaderPage
  },
data() {
  return {
    selectedOption: "credit-card",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
    totalAmount: this.$route.query.price, // Replace with actual total amount
  };
},
methods: {
  submitPayment() {
    // Implement payment submission logic here
    alert("Payment Successful"+ " " +this.cardNumber + " "+this.cardName +" "+ this.expiryDate + " "+this.cvv +" "+ this.upiId +" "+ this.totalAmount);
    this.$router.push({name:'CarouselPage'})
  },
},
};
</script>

<style scoped>
.payment-page {
display: flex;
flex-direction: column;
align-items: center;
padding: 50px;
}

.payment-title {
font-size: 30px;
font-weight: bold;
margin-bottom: 30px;
}

.payment-box {
width: 500px;
border: 1px solid #ccc;
border-radius: 5px;
margin-bottom: 30px;
}

.payment-option {
padding: 20px;
border-bottom: 1px solid #ccc;
}

.payment-option-header {
display: flex;
align-items: center;
margin-bottom: 20px;
}

.payment-option-header input[type="radio"] {
margin-right: 10px;
}

.payment-option-header label {
font-size: 20px;
}

.card-number label,
.card-name label,
.card-expiry label,
.card-cvv label,
.upi-id label {
display: block;
font-size: 18px;
margin-bottom: 5px;
}

.card-number input,
.card-name input,
.card-expiry input,
.card-cvv input,
.upi-id input,
select {
width: 100%;
height: 30px;
border: 1px solid #ccc;
border-radius: 5px;
padding: 5px;
margin-bottom: 10px;
}

.bank-list {
width: 100%;
margin-bottom: 10px;
}

.total-amount {
font-size: 20px;
margin-bottom: 30px;
}

.proceed-to-pay button {
padding: 10px 20px;
font-size: 20px;
background-color: #ff9f00;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;
}

.proceed-to-pay button:hover {
background-color: #ffbd45;
}

@media screen and (max-width: 600px) {
.payment-box {
  width: 90%;
}
}
</style>
