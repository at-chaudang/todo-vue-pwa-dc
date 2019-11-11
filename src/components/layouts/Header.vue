<template>
  <header class="page-header d-flex vertical horizontal">
    <h6>User name</h6>
    <h1 class="logo txt-center white">Todo</h1>
    <button @click="logout">Logout</button>
  </header>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
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
