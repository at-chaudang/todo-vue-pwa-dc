<template>
  <li class="todo-item">
    <label class="todo-text d-flex is-relative pointer" :class="{completed: completed}">
      <span class="checkmark is-relative" :class="{completed: completed}"></span>
      <input type="checkbox" class="d-none" v-model="completed" />
      {{title}}
    </label>
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
