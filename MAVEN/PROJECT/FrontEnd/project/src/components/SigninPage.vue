<template>
    <img class="logoo" src="../assets/login.png">
  <div>
      <h1>Login</h1>
<div class="loginn">
      <input type="text" v-model="student.email" placeholder="Enter Email" />
      <input type="Password" v-model="student.password" placeholder="Enter Password" />
      <button v-on:click="LoginData">Login</button>
    </div>
<p class="registerr">
Do not have account?&nbsp;&nbsp;
<router-link to="/signup">SignUP</router-link>
</p>
  </div>

</template>
<script>
import axios from 'axios';
export default {
    name:'SigninPage',
    
    //define the properiteis for v-model
    data(){
      return {
      result: {},
      student: {
      email: '',
      password: '',
      }
    }
    },
    created () {
  },
  mounted () {
    console.log('mounted() called---')
  },
    methods:{
      LoginData () {
      axios.post('http://localhost:9992/student/login', this.student)
        .then(
          ({data}) => {
            console.log(data)
            try {
              if (data.status === true) {
                alert('Login Successsful')
                localStorage.setItem('id',this.student.email);
                this.$router.push({name:'HomePage'})

                axios.post('http://localhost:9992/student/fetch',this.student)
                .then(
                  ({data}) =>{
                    localStorage.setItem('name',data.result.data.firstname);
                    this.$router.push({name:'HomePage'})
                  }
                )
             
              } else {
                alert('Login failed')
              }
            } catch (err) {
              alert('Error,please try again')
            }
          }
        )
    },
    },
};
</script>
<style>

.logoo{
    width: 100px;
    margin-top: 2%;
}

.loginn input {
    width: 350px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.loginn button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
    margin-top: 50px;
}
.registerr{
  justify-content: center;
  display: flex;
}
</style>