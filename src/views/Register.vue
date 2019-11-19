<template>
  <div class="register-form auth-pages">
    <div class="auth-container">
      <div class="title  mb-1">
        <h2>Register</h2>
      </div>
      <div class="form-custom">
        <div class="form-group mb-2">
            <label class="control-label">Email</label>
            <input v-model="email" type="text" class="form-control">
          </div>
          <div class="form-group mb-2">
            <label class="control-label">Password</label>
            <input v-model="password" type="password" class="form-control">
          </div>
        <button @click="signUp" class="btn btn-primary">Register</button>
      </div>
      <p class="text-small text-center mt-1">You have an account?
        <router-link v-bind:to="'login'">Login</router-link>
      </p>
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
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/');
        }).catch(() => {
        });
    }
  },
}
</script>>
