<template>
  <header class="page-header d-flex vertical horizontal">
    <h6 class="txt-limit col-3 header-left" @click="showUserInfo">
      <img class="img-avatar" :src="image_URL" alt="avatar">
    </h6>
    <h1 class="logo txt-center white col-6">Todo</h1>
    <button @click="logout" class="col-3 white">Logout</button>
    <UserInfo v-bind:class="{show: showUserCmp}" />
  </header>
</template>

<script>
import firebase from "firebase/app";
import UserInfo from './../features/UserInfo';

export default {
  name: "Header",
  components: {
    UserInfo
  },
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      image_URL: '',
      showUserCmp: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
      this.image_URL = firebase.auth().currentUser.photoURL || 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png';
    }
  },
  methods: {
    showUserInfo() {
      this.showUserCmp = true;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/login");
        });
    }
  }
};
</script>
