<template>
  <div class="register-form auth-pages">
    <div class="auth-container">
      <div class="title mb-1">
        <h2>Register</h2>
      </div>
      <div v-if="!message" class="message-error"></div>
      <transition name="fade" >
        <div v-if="message" class="message-error">{{message}}</div>
      </transition>
      <div class="form-custom mt-1">
        <div class="form-group mb-2">
          <label class="control-label">Email</label>
          <input v-model="email" type="text" class="form-control">
        </div>
        <div class="form-group mb-2">
          <label class="control-label">Password</label>
          <input v-model="password" type="password" class="form-control">
        </div>
        <div class="form-group mb-2">
          <label class="control-label">Confirm password</label>
          <input v-model="confirmPassword" type="password" class="form-control">
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
      password: '',
      confirmPassword: '',
      message: ''
    };
  },
  methods: {
    signUp: function() {
      if (this.password !== this.confirmPassword) {
        this.message = 'Your password and confirm password do not match.';
        return;
      };
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/');
        }).catch(error => {
          this.message = error.message;
        });
    }
  },
}
</script>>
