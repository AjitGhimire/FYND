<template>
  <img class="logo" src="../assets/login.png" />
  <div>
    <h1>Sign UP</h1>

    <div class="register">
    <input type="text" v-model="student.firstname" placeholder="Enter F.Name" />
    <input type="text" v-model="student.lastname" placeholder="Enter L.Name" />
    <input type="text" v-model="student.email"  placeholder="Enter Email" />
    <input type="Password" v-model="student.password" placeholder="Enter Password" />
    <button v-on:click="saveData">Register</button>
      <p class="login">
        <!-- to create a clickable text link -->
        Already have account?&nbsp;&nbsp;
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
//for database use

export default {
  name: "LoginPage",
  data() {
    return {
        result: {},
      student: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      }
    }
  },
  created () {
  },
  mounted () {
    console.log('mounted() called---')
  },
  methods: {
    saveData () {
      axios.post('http://localhost:9992/student/create', this.student)
        .then(
          ({data}) => {
            if(data.status === true){
              alert('Registered Successfully')
              this.$router.push({name: 'SigninPage',query:{name:this.student.firstname}})
          
            }else{
              alert('Registration Error')
            }
           
          }
        )
    },
  },
};
</script>
<style>
.logo {
  width: 100px;
  margin-top: 2%;
}

.register input {
  width: 350px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
  margin-top: 50px;
}
.login {
  justify-content: center;
  display: flex;
}
</style>
