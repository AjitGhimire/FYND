<template>
  <div>
  <nav>
    <div class="product-cards">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" @click="addToCart(product)">
        <h3 class="product-name">{{ product.name }}</h3>
      </div>
    </div>
  </nav>
    <CarouselTwo/>
    <CarouselOne/>
    <CarouselThree/>
    <FooterPage/>
  </div>
</template>

<script>
import CarouselTwo from './CarouselTwo.vue'
import CarouselOne from './CarouselOne.vue'
import CarouselThree from './CarouselThree.vue'
import FooterPage from '../FooterPage.vue'

export default {
  name:'CarouselPage',
  components:{
    CarouselTwo,
    CarouselOne,
    CarouselThree,
    FooterPage
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Grocery',
          image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61PfPAvrCjL._SL1140_.jpg',
          // price: '$19.99',
        },
        {
          id: 2,
          name: 'Mobiles',
          image: 'https://cdn.moglix.com/p/NKrBgT0EmIzgw.jpg',
          // price: '$29.99',
        },
        {
          id: 3,
          name: 'Fashion',
          image: 'https://rukminim1.flixcart.com/image/832/832/jw3umq80/gown/m/h/9/no-free-rj-tapetta-orenge-hd-fashion-no-original-imafgufgcknyt6vw.jpeg?q=70',
          // price: '$39.99',
        },
        {
          id: 4,
          name: 'Electronic',
          image: 'https://img4.gadgetsnow.com/gd/images/products/additional/large/G349792_View_1/computer-laptop/laptops/asus-vivobook-15-x515ma-br011w-intel-celeron-n4020-15-6-inches-everyday-computing-laptop-4gb-256gb-ssd-windows-11-transparent-silver-1-8-kg-.jpg',
          // price: '$49.99',
        },
        {
          id: 5,
          name: 'Appliances',
          image: 'https://c1.wallpaperflare.com/preview/96/1013/300/iron-home-appliances-small-appliances.jpg',
          // price: '$49.99',
        },
        {
          id: 6,
          name: 'Toys',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicNgbqjwT_CLizsFFQ-Xx9AZ7BtNCko26AQ&usqp=CAU',
          // price: '$49.99',
        }
      ],
    }
  },
  methods: {
    addToCart(product) {

      if (product.name == "Grocery") {
        this.$router.push({name:'GroceryPage'})
      }
      if (product.name == "Mobiles") {
        this.$router.push({name:'MobilePage'})
      }
      if (product.name == "Fashion") {
        this.$router.push({name:'FashionPage'})
      }
      if (product.name == "Electronic") {
        this.$router.push({name:'ElectronicPage'})
      }
      if (product.name == "Appliances") {
        this.$router.push({name:'AppliancePage'})
      }
      if (product.name == "Toys") {
        this.$router.push({name:'ToysPage'})
      }
    },

  },
};
</script>
<style>

nav .product-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 1.5%;
  margin-top: 1%;
}

nav .product-card {
  border: 1px solid #ccc;
  padding: 10px;
  width: calc(50% / 3 - 20px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
nav .product-image {
  width: 180px;
  max-height: 150px;
  object-fit:contain;
  margin-bottom: 10px;
}
nav .product-name {
  font-size: 1.2rem;
  margin-bottom: 5px;
}
</style>
