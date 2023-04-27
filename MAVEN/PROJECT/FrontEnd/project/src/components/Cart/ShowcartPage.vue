<template>
  <div>
    <HeaderPage />
    <h1>My Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Product Total</th>
          <th>Operation</th>
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
            <button @click="decrementQuantity(product)">-</button>
            <input type="text" v-model="product.quantity" />
            <button @click="incrementQuantity(product)">+</button>
          </td>
          <td>Rs. {{ product.quantity * product.price }}</td>
          <td>
            <button class="add-to-cart-button" @click="remove(product)">Remove</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4"><b>Total Price:</b></td>
          <td>
            <b>Rs. {{ totalPrice }}</b>
          </td>
        </tr>
      </tfoot>
    </table>
    <button class="buy"  @click="Buy()">Place Order</button>
  </div>
</template>

<script>
import axios from "axios";
import HeaderPage from "../HeaderPage.vue";
export default {
  name: "ShowcartPage",
  components: {
    HeaderPage,
  },
  data() {
    return {
      products: [],
      productcart: {
        userid: localStorage.getItem("id"),
        _id: null,
       
      },
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i];
        total += product.price * product.quantity;
      }
      return total;
    },
  },
  mounted() {
    let userid = localStorage.getItem("id");
    if (userid) {
      axios
        .post("http://localhost:9992/product/fetchcartspecific", this.productcart)
        .then(({ data }) => {
          this.products = data.result.data;
          const lengthh = data.result.data.length;
          if (lengthh == 0) {
            alert("No any prduct found in the cart, Please add products");
            this.$router.push({ name: "HomePage" });
          }
          console.log(data);
        });

      // fetch("http://localhost:9992/product/fetchcart")
      // .then(response => response.json())
      // .then(data => {
      //   this.products = data.result.data;

      //   console.log(data)
      // })
      // .catch(error => {
      //   console.error(error);
      // });

      
    } else {
      alert("You must be logged In to view cart products");
      this.$router.push({ name: "SigninPage" });
    }
  },

  methods: {
    incrementQuantity(product) {
      product.quantity++;
      const quan = product.quantity;
      const price = product.price;
      product.pricee = price * quan;
    },
    decrementQuantity(product) {
      if (product.quantity > 1) {
        product.quantity--;
        const price = product.price;
        product.pricee = product.pricee - price;
      }
    },
    Buy() {
      this.$router.push({name:'ViewPage',query:{totalprice:this.totalPrice, products:JSON.stringify(this.products)}})
    },
    remove(product) {
      this.productcart._id = product._id;
      axios
        .post("http://localhost:9992/product/deletecartspecific", this.productcart)
        .then(({ data }) => {
          if (data.status == true) {
            alert("Successfully removed product");
            location.reload();
            console.log(data);
          }
        });
    },
  },
};
</script>
<style>
table {
  border-collapse: collapse;
  width: auto;
  margin: auto;
  padding: auto;
  border: 1px solid #ddd;
}
table .heading {
  height: 40px;
  width: auto;
}
table td, th{
  padding: 10px;
}
.buy {
  margin-bottom: 2%;
  font-size: 17px;
  background-color: black;
  color: white;
}
input {
  width: 40px;
  text-align: center;
}
.quantity button {
  margin: 5px;
}
.product-cardss {
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.5%;
  margin-top: 1%;
  align-items: center;
}

.product-cardd {
  padding: 10px;
  width: 150dp;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-imagee {
  width: 100px;
  max-height: 150px;
  object-fit: scale-down;
  margin-bottom: 10px;
}
</style>
