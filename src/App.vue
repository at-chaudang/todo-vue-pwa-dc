<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
@import "./assets/styles/styles.scss";
</style>
