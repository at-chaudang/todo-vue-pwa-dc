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
          <img class="avatar" :src="imageUrl" alt="avatar">
        </div>
        <span class="title">{{email}}</span>
      </div>
      <ul class="sidebar-menu">
        <li class="sidebar-menu-item">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
export default {
  name: 'UserInfo',
  props: ['showUserCmp'],
  data() {
    return {
      email: '',
      imageUrl: '',
      imageDefault: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.email = firebase.auth().currentUser.email;
      this.imageUrl = firebase.auth().currentUser.photoURL || this.imageDefault;
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/login');
        });
    },
    closeUserCmp() {
      this.$emit('closeUserCmp', false);
    }
  }
}
</script>
