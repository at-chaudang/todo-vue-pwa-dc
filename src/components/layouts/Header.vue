<template>
  <header class="page-header d-flex vertical horizontal">
    <h6 class="txt-limit col-3 p-h-10">
      <img class="img-avatar" :src="image_URL" alt="avatar">
    </h6>
    <h1 class="logo txt-center white col-6">Todo</h1>
    <button @click="logout" class="col-3 white">Logout</button>
  </header>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      image_URL: ''
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
