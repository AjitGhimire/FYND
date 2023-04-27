<template>
  <h1>Available Shoes Brands</h1>
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
          name: "Nike",
          // price: "$10",
          image: "https://i.ebayimg.com/images/g/I7oAAOSwiG1Z0IAe/s-l1600.jpg",
        },
        {
          name: "Sports",
          // price: "$20",
          image: "https://m.media-amazon.com/images/I/61elijlCMBL._UL1500_.jpg",
        },
        {
          name: "Velcro",
          // price: "$30",
          image: "https://ae01.alicdn.com/kf/Sba081edacdff47f592a8166ab4a576117/Women-Shoes-2022-New-Velcro-White-Shoes-Female-Korean-Version-All-match-Casual-Shoes-Comfortable-Light.jpg_Q90.jpg_.webp",
        },
        {
          name: "Spark",
          // price: "$40",
          image: "https://dxkvlfvncvqr8.cloudfront.net/media/product-image/SL-198-BMRD-1.jpg",
        },
        {
          name: "Panda",
          // price: "$50",
          image: "https://shodagor-uploads.s3.ap-south-1.amazonaws.com/uploads/all/4fdpI.jpg",
        },
        {
          name: "Adidas",
          // price: "$60",
          image:"https://5.imimg.com/data5/TG/UV/MY-33409561/men-27s-adidas-x-17-4-fxg-football-shoes-500x500.png",
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
      
      if (product.name == "Nike") {
        this.$router.push({name:'NikePage'})
      }
      if (product.name == "Sports") {
        this.$router.push({name:'SportsPage'})
      }
      if (product.name == "Velcro") {
        this.$router.push({name:'VelcroPage'})
      }
      if (product.name == "Spark") {
        this.$router.push({name:'SparkPage'})
      }
      if (product.name == "Panda") {
        this.$router.push({name:'PandasPage'})
      }
      if (product.name == "Adidas") {
        this.$router.push({name:'AdidasPage'})
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
  color: #444;
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
