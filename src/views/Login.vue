<template>
  <div class="login-form auth-pages">
    <div class="auth-container">
      <div class="title mb-1">
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
          <button @click="signInWithSocial()" class="btn btn-outline-primary">Google</button>
          <button @click="signInWithSocial('facebook')" class="btn btn-outline-primary">Facebook</button>
        </div>
      </div>
      <div class="text-small text-center mt-1 sign-up">
        <p class="">Don't have an account?
          <router-link to="register">Sign up</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

var provider = {
  google: new firebase.auth.GoogleAuthProvider(),
  facebook: new firebase.auth.FacebookAuthProvider()
}

export default {
  name: 'login',
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
          this.$router.push('/');
        })
        .catch(error => {
          this.message = error.message;
        });
    },
    signInWithSocial(social = 'google') {
      firebase
        .auth()
        .signInWithPopup(provider[social])
        .then(() => {
          this.$router.replace({ name: 'TodoList' });
        })
        .catch(error => {
          // Handle Errors here.
          this.message = error.message;
        });
    }
  }
};
</script>
