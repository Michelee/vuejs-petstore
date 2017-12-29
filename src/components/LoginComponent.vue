<template>
	<div>
		<h1>Login Page</h1>
	    <customInput type="text" id="username" label="Username" v-model="username"></customInput>
	    <customInput type="password" id="password" label="Password" v-model="password"></customInput>
	    <button @click.prevent="login">Enviar</button>
	    <h3>{{ msg }}</h3>
	</div>
</template>

<script>
import loginUser from '../api/users/index.js'

export default {
  data () {
    return {
      username: '',
      password: '',
      msg: ''
    }
  },
  methods: {
    login(){
      var url = 'https://virtserver.swaggerhub.com/robinsound/PetShopExersice/1.0.0/user/login?username=' + this.username + '&password=' + this.password;
      const self = this
      loginUser(url).then(function (data) {
          self.msg = data
      });
    }
  }
}
</script>

<style></style>