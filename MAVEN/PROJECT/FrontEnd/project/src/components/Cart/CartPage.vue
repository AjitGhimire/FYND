<template>
  <div>
    <HeaderPage/>
    <h2>Detail View</h2>
    <div class="product-cards_cart">
      <div class="product-card_cart">
        <img :src="image" alt="Selected image" class="product-image_cart" />
      </div>

      <div class="details">
        <h3>{{ $route.query.name }}</h3>
        <p>Rs. {{ $route.query.price }}</p>
        <p>{{ $route.query.disc }}</p>

        <div class="productaddsub">
          <button @click="decrementQuantity">-</button>
          <span>{{product. quantity }}</span>
          <button @click="incrementQuantity">+</button>
        </div>
        <h3>Total Price Rs:- {{product. price }}</h3>
      
        <div class="text-left">
        <div class="addbuy">
          <button class="buy-button" @click="Buy()">Buy</button>
          <button class="add-to-cart-button" @click="addtocart()">Add to cart</button>
      </div>
    </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from '../HeaderPage.vue'
export default {
  name: "CartPage",
  components: {
        HeaderPage
    },
  computed: {
    image() {
      return this.$route.query.image;
    },
  },
  data() {
    return {
      result:{},
      product:{ 
      name: this.$route.query.name,
      price: this.$route.query.price,
      quantity:1,
      image:this.$route.query.image,
      userid:localStorage.getItem('id')  //get id from local storage
      }
    };
  },
  methods: {
    incrementQuantity() {
      this.product.quantity++;
      const quan = this.product.quantity;
      const price = this.$route.query.price;
      this.product.price = price * quan;
    },
    decrementQuantity() {
      if (this.product.quantity > 1) {
        this.product.quantity--;
        const price = this.$route.query.price;
        this.product.price = this.product.price - price;
      }
    },
    Buy() {
      let user= localStorage.getItem('id');
      if(user){
        this.$router.push({
        name: "ViewsecondPage",
        query: { totalprice: this.product.price, quantityy:this.product.quantity, images:this.product.image, proname: this.product.name },
      });
      }else{
        alert("You must be logged In to buy products")
        this.$router.push({name:'SigninPage'})
      }
    },
    addtocart() {
      let user= localStorage.getItem('id');
      if(user){
        axios.post('http://localhost:9992/product/cart',this.product)
        .then(
          ({data}) => {
            if(data.status === true){
              alert('Successfully Added to cart')        
              location.reload();
            }else{
              alert('Error')
            }
           
          }
        )
      }else{
        alert("You must be logged In to add products to cart")
        this.$router.push({name:'SigninPage'})
      }
    },
  },
};
</script>
<style>
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
  width: 310px;
  height: calc(50% / 3 - 10px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image_cart {
  width: 300px;
  max-height: 400px;
  object-fit: contain;
  margin-bottom: 10px;
}

.details button {
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  justify-content: flex-start;
  display: flex;
}
.details h3,
p {
  text-align: left;
}

.productaddsub {
  justify-content: flex-start;
  display: flex;
}

.productaddsub button {
  color: #ffffff;
  background-color: #050505;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
}
.productaddsub span {
  font-size: 1.2em;
  margin: 0 10px;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 3.5%;
}

.text-left{
  display: flex;
}
.addbuy button {
  color: #ffffff;
  background-color: #ff0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 5px;
  margin-left: 5px;
  display:inline-block;  
}


</style>
