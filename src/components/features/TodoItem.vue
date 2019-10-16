<template>
  <li class="todo-item">
    <input type="checkbox" class="input-checkbox pointer" v-model="completed" />
    <label v-if="!editing" class="todo-text" :class="{completed: completed}">{{title}}</label>
    <input
      v-else
      v-focus
      class="form-control todo-text"
      type="text"
      placeholder="Enter a task!"
      v-model="title"
    />
    <div class="delete-icon pointer">&times;</div>
  </li>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  },
  data () {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      cachedTask: ''
    }
  }
}
</script>
