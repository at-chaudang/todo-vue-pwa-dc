<template>
  <div class="sidebar user-info" id="user-info" @click="close">
    <div class="sidebar-content">
      <div class="sidebar-header">
        <div class="avatar">
          <img class="img-avatar" :src="image_URL" alt="avatar">
        </div>
        <span class="title">{{email}}</span>
      </div>
      <ul class="sidebar-menu">
        <li class="sidebar-menu-item">
          <a href='#' @click="logout" class="">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style id="setting">
</style>

<script>
import firebase from "firebase/app";
export default {
  name: 'UserInfo',
  props: ['showUserCmp'],
  data() {
    return {
      email: '',
      image_URL: '',
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      console.log(firebase.auth().currentUser);
      this.email = firebase.auth().currentUser.email;
      this.image_URL = firebase.auth().currentUser.photoURL;
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    },
    close() {
      console.log('close');
      this.$emit('close', false);
    }
  }
}
</script>
