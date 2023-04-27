<template>
  <h1>Available Laptops Brands</h1>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
  </head>

  <div class="carousel-container">
    <div class="carousel-wrapper">
      <div class="carousel" ref="carousel">
        <div class="carousel-item" v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.name" />
          <div class="product-details">
            <h3>{{ product.name }}</h3>
            <button class="add-to-cart-button" @click="addToCart(product)">View All</button>
          </div>
        </div>
      </div>
      <div class="slide-controls">
        <button class="prev" @click="prevSlide">
          <i class="fa fa-chevron-left"></i>
        </button>
        <button class="next" @click="nextSlide">
          <i class="fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: "Lenovo",
          // price: "$10",
          image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg",
        },
        {
          name: "Asus",
          // price: "$20",
          image: "https://img1.gadgetsnow.com/gd/images/products/additional/large/G338944_View_1/computer-laptop/laptops/asus-vivobook-flip-14-x415ka-bv121ws-intel-pentium-silver-n6000-14-inches-notebook-laptop-8gb-256gb-ssd-windows-11-transparent-silver-1-5-kg-.jpg",
        },
        {
          name: "Dell",
          // price: "$30",
          image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/prod-2045-laptop-g-15-5520-16-7620-800x620-2.png?fmt=png-alpha&wid=800&hei=620",
        },
        {
          name: "HP",
          // price: "$40",
          image: "https://m.media-amazon.com/images/I/81WJR8YFnnL._SY450_.jpg",
        },
        {
          name: "Microsoft",
          // price: "$50",
          image: "https://www.tmt.my/data/editor/product/NBB-MCSSLG/mcsslg.jpg",
        },
        {
          name: "Apple",
          // price: "$60",
          image: "https://m.media-amazon.com/images/I/41ZJJLODSAL._SY450_.jpg",
        },
      ],
      currentSlide: 0,
      slideWidth: 0,
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.products.length - 4) {
        this.currentSlide++;
        this.slideWidth = this.currentSlide * -(100 / this.products.length);
        this.$refs.carousel.style.transform = `translateX(${this.slideWidth}%)`;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.slideWidth = this.currentSlide * -(100 / this.products.length);
        this.$refs.carousel.style.transform = `translateX(${this.slideWidth}%)`;
      }
    },
    addToCart(product) {
    
      if(product.name == "Lenovo"){
        this.$router.push({name:'LenovoPage'})
      }
      if(product.name == "Asus"){
        this.$router.push({name:'AsusPage'})
      }
      if(product.name == "HP"){
        this.$router.push({name:'HpPage'})
      }
      if(product.name == "Microsoft"){
        this.$router.push({name:'MicrosoftPage'})
      }
      if(product.name == "Dell"){
        this.$router.push({name:'DellPage'})
      }
      if(product.name == "Apple"){
        this.$router.push({name:'AppleLaptopPage'})
      }

    
    },
  },
};
</script>

<style scoped>
h1{
  margin-top: 2%;
}
.carousel-container {
  max-width: auto;
  margin: 0 auto;
  margin-top: 1%;
  
}

.carousel-wrapper {
  overflow: hidden;
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-item {
  flex: 0 0 20%;
  margin-right: 1rem;
  border: 1px solid black;
}

.carousel-item img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.product-details {
  padding: 0.5rem;
  text-align: center;
}

.product-details h3 {
  font-size: 1rem;
  margin-bottom: 2rem;
}
.slide-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.slide-controls button {
  background: #edebeb;
  border: none;
  color: #000000;
}
.add-to-cart-button {
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

}
</style>
