<template>
    <nav class="navbar">
      <div class="navbar-left">
        <a class="navbar-brand" href="/">Ajit Shop</a>
        <ul class="navbar-nav">
          <li class="nav-item"><a href="/" class="nav-link">Home</a></li>
          <li class="nav-item"><a v-on:click="cart" class="nav-link">Cart ({{listitem}})</a></li>
          <li class="nav-item"><a v-on:click="login" class="nav-link">Login</a></li>
        </ul>
      </div>
      <div class="navbar-right">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="search_data" >
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="search">Search</button>
        </form>
        <ul class="navbar-nav">
          <li class="nav-item dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown">
            <a href="#" class="nav-link dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">
            ({{username}}) Profile
            </a>
            <div class="dropdown-menu" v-show="showMenu">
              <a class="dropdown-item" v-on:click="register">New User ?</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" v-on:click="logout">Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        showMenu: false,
        search_data:'',
        username: "null",
        listitem: 0,
        productcart:{
        userid: localStorage.getItem("id"),
        },
      }
    },
    mounted(){
    let userid = localStorage.getItem("id");
    if (userid) {
      axios
        .post("http://localhost:9992/product/fetchcartspecific", this.productcart)
        .then(({ data }) => {
          this.listitem= data.result.data.length;
          this.username = localStorage.getItem("name");
        });
    }else{
      this.listitem= 0;
    }
    },
    methods: {
      showDropdown() {
        this.showMenu = true;
      },
      hideDropdown() {
        this.showMenu = false;
      },
      login(){
        let user= localStorage.getItem('id');
      if(user){
        alert("Already Logged In")
      }else{
        this.$router.push({name:'SigninPage'})
      }
      },
      logout(){
        localStorage.removeItem('id')
        localStorage.removeItem('name')
        this.$router.push({name:'SigninPage'})
        alert("Logout successfully")
      },
      cart(){
        this.$router.push({name: "ShowcartPage"})
      },
      register(){
        this.$router.push({name: "LoginPage"})
      },
      search(){
        const search=this.search_data.toLocaleLowerCase();
        if(search == 'laptop' || search == 'apple laptop' || search == 'asus laptop' || search == 'microsoft laptop' || search == 'dell laptop' || search == 'hp laptop'|| search == 'lenovo laptop'){
          this.$router.push({name:'CarouselThree'})
        }
       else if(search == 'mobile' || search == 'redmi mobile' || search == 'nokia mobile' || search == 'samsung mobile' || search == 'vivo mobile' || search == 'oppo mobile'|| search == 'mobile apple'
       || search == 'redmi' || search == 'nokia' || search == 'samsung' || search == 'vivo' || search == 'oppo'|| search == 'apple'
       ){
          this.$router.push({name:'CarouselTwo'})
        }
       else if(search == 'shoes'){
          this.$router.push({name:'CarouselOne'})
        }
        else if(search == 'clothes'|| search == 'cloth'|| search == 'dress'){
          this.$router.push({name:'FashionPage'})
        }
        else if(search == 'toys' || search == 'games'){
          this.$router.push({name:'ToysPage'})
        }
        else if(search == 'electronic'){
          this.$router.push({name:'ElectronicPage'})
        }
        else if(search == 'grocery' || search == 'kitchen item' || search == 'house item'){
          this.$router.push({name:'GroceryPage'})
        }
          else if(search == 'appliance' || search == 'fans' || search == 'washing machine' ||search == 'mixtured'){
          this.$router.push({name:'AppliancePage'})
        }else{
          alert("No product found")
        }
      }
      }
    }
  
  </script>
  
  <style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 30px;
    background-color: #000000;
    color: #fff;
    width: auto;
    margin: auto;
    padding: auto;
  }
  .navbar-left {
    display: flex;
    align-items: center;
  }

  .navbar-brand {
    font-size: 24px;
    font-weight: bold;
    margin-right: 30px;
    text-decoration: none;
    color: rgb(106, 255, 0);
  }
  .navbar-nav {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    position: relative;
    margin-right: 20px;
    cursor: pointer;
    font-size: 20px;
  }
  .nav-link {
    color: #fff;
    text-decoration: none;
  }
  .navbar .navbar-nav li a:hover{
  background-color: #ffffff;
  color: rgb(0, 0, 0);

  }
  .navbar-right {
    display: flex;
    align-items: center;
  }
  .form-inline {
    margin-right: 30px;
  }
  
  .form-control {
    width: 200px;
    height: 30px;
    margin-right: 10px;
  }
  .btn-outline-success {
    color: #070707;
    border-color: #fff;
    height: 30px;
  }
  .navbar-nav:last-child {
    margin-right: 0;
  }
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
  }
  .nav-item:hover .dropdown-menu {
    display: block;
    background-color: rgb(0, 0, 0);
  }
  
  .dropdown-item {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    color: #ffffff;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
  
  .dropdown-item:focus,
  .dropdown-item:hover {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
  }

  </style>
  