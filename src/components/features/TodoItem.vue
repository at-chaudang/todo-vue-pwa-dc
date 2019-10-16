<template>
  <li class="todo-item">
    <input type="checkbox" class="input-checkbox" v-model="completed" />
    <span v-if="!editing" :class="{completed: completed}">{{title}}</span>
    <input
      v-else
      v-focus
      class="form-control"
      type="text"
      placeholder="Enter a task!"
      v-model="title"
    />
    <div class="remove-item">&times;</div>
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
