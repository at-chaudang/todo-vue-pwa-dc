<template>
  <div class="sidebar user-info" id="user-info">
    <div class="back-area">
      <div class="back" @click="closeUserCmp">
        <img src="./../../assets/images/arrow-left-solid.svg" alt="arrow-left-solid.svg">
      </div>
    </div>
    <div class="sidebar-content">
      <div class="sidebar-header">
        <div class="avatar">
          <img class="avatar" :src="image_URL" alt="avatar">
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
      this.image_URL = firebase.auth().currentUser.photoURL || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png';
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
    closeUserCmp() {
      console.log('close');
      this.$emit('closeUserCmp', false);
    }
  }
}
</script>
