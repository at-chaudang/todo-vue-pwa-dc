<template>
  <div class="register-form">
    <div class="main-container">
      <h3>Register</h3>
      <div class="form-group">
        <input type="text" v-model="email" placeholder="Email" class="form-control">
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Password" class="form-control">
      </div>
      <button @click="signUp" class="btn btn-primary">Register</button>

      <p class="text-small text-center mt-1">You have a account? Login</p>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase/app';
require('firebase/auth')

export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user) {
          alert('Your account has been created.' + user);
        }).catch(function(error) {
          alert('Oops. ' + error.message);
        });
    }
  },
}
</script>>
