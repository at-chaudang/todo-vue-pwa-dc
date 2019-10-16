<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './views/TodoList.vue'

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
