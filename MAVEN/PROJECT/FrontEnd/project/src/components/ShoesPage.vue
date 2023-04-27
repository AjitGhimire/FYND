<template>
  <div>
    <h1>Product List</h1>
    <div class="product-cards">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.thumbnail" :alt="product.name" class="product-image">
        <h3 class="product-name">{{ product.title }}</h3>
        <p class="product-price">{{ product.price }}</p>
          <button class="add-to-cart-button" @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'ShoesPage',

  data() {
    return {
      products: []
    };
  },
  mounted() {
    fetch("https://dummyjson.com/products/category/sunglasses")
      .then(response => response.json())
      .then(data => {
        this.products = data.products;
      })
      .catch(error => {
        console.error(error);
      });
  },
   methods: {
    addToCart(product) {
      console.log('Adding product to cart:', product);
      alert("clicked"+product.title);
    
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
  max-height: 100px;
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
</style>
