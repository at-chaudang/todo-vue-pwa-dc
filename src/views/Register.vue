<template>
  <div class="register-form auth-pages">
    <div class="auth-container">
      <div class="title mb-1">
        <h2 class="flex-container">Register</h2>
        <transition name="bounce">
          <span v-if="message" class="message-error flex-container">{{message}}</span>
        </transition>
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
        setTimeout(() => {
          this.message = '';
        }, 3000);
        return;
      };
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/');
        }).catch(error => {
          this.message = error.message;
          setTimeout(() => {
            this.message = '';
          }, 3000);
        });
    }
  },
}
</script>>
