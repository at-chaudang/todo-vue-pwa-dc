<template>
  <div class="login-form auth-pages">
    <div class="auth-container">
      <div class="title mb-1">
        <h2>Welcome!</h2>
      </div>
      <div class="form-custom">
        <div class="form-group mb-2">
          <label class="control-label">Email</label>
          <input v-model="email" type="text" class="form-control" autocomplete=""/>
        </div>
        <div class="form-group mb-2">
          <label class="control-label">Password</label>
          <input v-model="password" type="password" class="form-control" />
        </div>
        <button class="btn btn-primary w-50" @click="signInWithAccount">Sign In</button>
        <button class="btn-text w-50 d-inline-block">
          <router-link to="/register">Sign up</router-link>
        </button>
        <p class="text-small text-center mt-1">or sign in with</p>
        <div class="btn-group mt-1">
          <button @click="signInWithGoogle" class="btn btn-outline-primary">Sign in with Google</button>
          <button @click="signInWithFacebook" class="btn btn-outline-primary">Sign in with Facebook</button>
        </div>
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
      email: "",
      password: ""
    };
  },
  methods: {
    signInWithAccount() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.$router.push("/");
        })
        .catch(error => {
          // alert(`Oops. ${error.message}`);
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
        .catch(() => {
          // Handle Errors here.
          // ...
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
        .catch(() => {
          // Handle Errors here.
          // ...
        });
    }
  }
};
</script>
