<template>
  <div>
    <header class="page-header d-flex vertical horizontal">
      <h6 class="avatar txt-limit" v-if="isLoggedIn" @click="showUserInfo">
        <img class="avatar" :src="image_URL" alt="avatar">
      </h6>
      <h1 class="logo txt-center white col-7">Todo</h1>
    </header>
    <UserInfo :showUserCmp="showUserCmp" @close="hideUserInfo" v-bind:class="{show: showUserCmp}"/>
  </div>
</template>

<script>
import firebase from 'firebase/app';
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
      this.image_URL = firebase.auth().currentUser.photoURL;
    }
  },
  methods: {
    showUserInfo() {
      console.log('show');
      this.showUserCmp = true;
    },
    hideUserInfo() {
      this.showUserCmp = false;
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
