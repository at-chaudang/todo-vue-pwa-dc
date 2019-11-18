<template>
  <header class="page-header d-flex vertical horizontal">
    <button @click="showUserInfo">User</button>
    <h1 class="logo txt-center white">
      Todo
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {
    showUserInfo() {
      $('.user-info').css('margin-left', 0);
    }
  },
}
</script>
