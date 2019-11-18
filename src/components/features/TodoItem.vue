<template>
  <li class="todo-item">
    <label class="todo-item-container d-flex is-relative pointer" :class="{completed: completed}">
      <span class="checkmark is-relative" :class="{completed: completed}"></span>
      <input type="checkbox" class="d-none" v-model="completed"/>
      <span class="txt-limit todo-item-text" :title="title">{{title}}</span>
    </label>
    <div class="delete-icon pointer d-flex center" @click="removeTodo(key)">&times;</div>
  </li>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      key: this.todo.key
    }
  },
  methods: {
    removeTodo(id) {
      this.$emit("removedTodo", id);
    }
  },
  watch: {
    completed: {
      handler() {
        this.$emit('updateStatus', this.key, this.completed);
      },
      deep: true
    }
  }
}
</script>
