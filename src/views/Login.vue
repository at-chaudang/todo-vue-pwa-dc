<template>
  <div class="login-form auth-pages">
    <div class="auth-container">
      <div class="title mb-1">
        <h2>Welcome!</h2>
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
        <button class="btn btn-primary">Login In</button>

        <p class="text-small text-center mt-1">or sign in with</p>
        <div class="btn-group mt-1">
          <button @click="signInWithGoogle" class="btn btn-outline-primary">Signin with Google</button>
          <button @click="signInWithFacebook" class="btn btn-outline-primary ">Signin with Facebook</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

var provider = new firebase.auth.GoogleAuthProvider();
var provider = new firebase.auth.FacebookAuthProvider();

export default {
  name: 'login',
  data() {
    return{
      email: '',
      password: ''
    };
  },
  methods: {
    signInWithGoogle() {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        this.$router.replace({ name: "TodoList" });
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    },
    signInWithFacebook() {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        this.$router.replace({ name: "TodoList" });

        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
  },
}
</script>
