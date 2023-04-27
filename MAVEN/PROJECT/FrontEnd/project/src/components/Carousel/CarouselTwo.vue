<template>
  <h1>Available Mobiles Brands</h1>
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
          name: "Samsung",
          // price: "$10",
          image:
            "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m536bzbfinu/gallery/in-galaxy-m53-5g-sm-m536-421705-sm-m536bzbfinu-532181615?$650_519_PNG$",
        },
        {
          name: "Vivo",
          // price: "$20",
          image:
            "https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1677136560047/bc15fdf9b8f4abecbe78c2e86eb27df9.png",
        },
        {
          name: "Oppo",
          // price: "$30",
          image:
            "https://www.sathya.store/img/product/fODGwJzDhW5TWsZh.png",
        },
        {
          name: "Apple",
          // price: "$40",
          image:
            "https://manzanasymas.com/wp-content/uploads/2022/01/iphone-13-pro-max-plata-01.jpg",
        },
        {
          name: "Nokia",
          // price: "$50",
          image:
            "https://www.slashgear.com/img/gallery/nokia-2-3-stock-android-phone-released-in-usa-for-129/nokia23_04.jpg",
        },
        {
          name: "Redmi",
          // price: "$60",
          image:
            "https://media.mobex.in/media/catalog/product/r/e/refurbished_xiaomi_redmi_note_9_pro_blue_two_1_1.png?auto=webp&format=png&width=960&height=1200&fit=cover",
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
     

      if (product.name == "Samsung") {
        this.$router.push({name:'SamsungPage'})
      }
      if (product.name == "Vivo") {
        this.$router.push({name:'VivoPage'})
      }
      if (product.name == "Oppo") {
        this.$router.push({name:'OppoPage'})
      }
      if (product.name == "Apple") {
        this.$router.push({name:'ApplePage'})
      }

      if (product.name == "Nokia") {
        this.$router.push({name:'NokiaPage'})
      }
      if (product.name == "Redmi") {
        this.$router.push({name:'RedmiPage'})
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
