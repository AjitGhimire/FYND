<template>
    <div class="first">
      <HeaderPage/>
      <h1>Available Mobiles</h1>
      
      <div class="product-cards">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.thumbnail" :alt="product.name" class="product-image">
          <h3 class="product-name">{{ product.title }}</h3>
          <p class="product-price">Rs. {{ product.price }}</p>
            <button class="add-to-cart-button" @click="addToCart(product)">Explore</button>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
  import HeaderPage from '../HeaderPage.vue'
  import userData from '@/assets/top/mobiles.json'
  export default {
    name: "MobilePage",
    components: {
        HeaderPage
    },
    data() {
      return {
        products: userData,
       
      };
    },
  
     methods: {
      addToCart(product) {
    
        this.$router.push({name:'CartPage',query:{name:product.title, image:product.thumbnail, price:product.price, disc:product.description}})
      },
  
    },
  };
  </script>
  <style>
  .product-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-left: 1.5%;
    margin-top: 1%;
  }
  
  .product-card {
    border: 1px solid #ccc;
    padding: 10px;
    width: calc(50% / 3 - 20px);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .product-image {
    width: 100px;
    max-height: 150px;
    object-fit: scale-down;
    margin-bottom: 10px;
  }
  
  .product-name {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
  
  .product-price {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  
  .add-to-cart-button {
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .first{
    margin-bottom: 1%;
  }
  </style>
  