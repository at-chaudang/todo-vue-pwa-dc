<template>
  <div class="login-form auth-pages">
    <div class="auth-container">
      <div class="title mb-2">
        <h2>Welcome!</h2>
      </div>
      <div v-if="!message" class="message-error"></div>
      <transition name="fade" >
        <div v-if="message" class="message-error">{{message}}</div>
      </transition>
      <div class="form-custom mt-1">
        <div class="form-group mb-2">
          <label class="control-label">Email</label>
          <input v-model="email" type="text" class="form-control" autocomplete=""/>
        </div>
        <div class="form-group mb-2">
          <label class="control-label">Password</label>
          <input v-model="password" type="password" class="form-control" />
        </div>
        <button class="btn btn-primary" @click="signInWithAccount">Sign In</button>
        <p class="text-small text-center mt-1">or sign in with</p>
        <div class="btn-group mt-1">
          <button @click="signInWithGoogle" class="btn btn-outline-primary">Sign in with Google</button>
          <button @click="signInWithFacebook" class="btn btn-outline-primary">Sign in with Facebook</button>
        </div>
      </div>
      <div class="text-small text-center mt-1 sign-up">
        <p class="">Don't have an account?
          <router-link v-bind:to="'register'">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

export default {
  name: "login",
  data() {
    return {
      email: '',
      password: '',
      message: ''
    };
  },
  methods: {
    signInWithAccount() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/");
        })
        .catch(error => {
          this.message = error.message;
        });
    },
    signInWithGoogle() {
      firebase
        .auth()
        .signInWithPopup(providerGoogle)
        .then(() => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          this.$router.replace({ name: "TodoList" });
          // ...
        })
        .catch(error => {
          // Handle Errors here.
          this.message = error.message;
        });
    },
    signInWithFacebook() {
      firebase
        .auth()
        .signInWithPopup(providerFacebook)
        .then(() => {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          this.$router.replace({ name: "TodoList" });
          // ...
        })
        .catch(error => {
          // Handle Errors here.
          this.message = error.message;
        });
    }
  }
};
</script>
