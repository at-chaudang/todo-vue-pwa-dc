<template>
  <header class="page-header d-flex vertical horizontal">
    <div class="txt-limit col-3 header-left">
      <div class="avatar" @click="showUserInfo">
        <img :src="imageUrl" alt="avatar">
      </div>
    </div>
    <h1 class="logo txt-center white col-6">Todo</h1>
    <div class="col-3"></div>
    <UserInfo :showUserCmp="showUserCmp" @closeUserCmp="hideUserInfo" v-bind:class="{show: showUserCmp}" />
  </header>
</template>

<script>
import firebase from 'firebase/app';
import UserInfo from './../features/UserInfo';

export default {
  name: 'Header',
  components: {
    UserInfo
  },
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      imageUrl: '',
      imageDefault: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png',
      showUserCmp: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
      this.imageUrl = firebase.auth().currentUser.photoURL || this.imageDefault;
    }
  },
  methods: {
    showUserInfo() {
      this.showUserCmp = true;
    },
    hideUserInfo(data) {
      this.showUserCmp = data;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/login');
        });
    }
  }
};
</script>
