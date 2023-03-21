<template>
  <div id="background" style="padding-top:20px;">
    <center>
      <div id="divLogin" class="col-sm-3 my-sm-5 border rounded" style="margin-left:0.5%">
        <form class="container" @submit.prevent="login">
          <center>
            <h1>Login</h1>
          </center>
          <hr>
          <div class="row">
            <label for="loginUsername">Username:</label>
            <input
              v-model="username"
              name="username"
              class="form-control"
              placeholder="Enter Username"
            >
            <br>
          </div>
          <br>
          <div class="row">
            <label for="loginPassword">Password:</label>
            <input
              v-model="password"
              name="password"
              class="form-control"
              id="loginPassword"
              placeholder="Enter Password"
            >
          </div>
          <br>
          <button id="btnLogin" class="btn btn-primary btn-lg btn-block col-sm-5" @click="submit">
            <h4>Login</h4>
          </button>
          <br>
        </form>
      </div>
    </center>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    },
    submit: function() {
      alert("Username:\n " + this.username + "Password: " + this.password);
    }
  }
};
</script>