<template>
  <div class="todo-form d-flex is-relative">
    <input
      type="text"
      class="todo-input form-control"
      placeholder="Enter a task!"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <button type="button" class="btn btn-add d-flex" :disabled="!newTodo" @click="addTodo">
      <i class="icon icon-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length) {
        this.$emit('addTodo', this.newTodo, this.getNewId());
        this.newTodo = ''
      }
    },
    getNewId() {
      const id = this.getLastId() + 1;
      localStorage.setItem('lastTodoId', id);
      return id;
    },
    getLastId() {
      return +localStorage.getItem('lastTodoId') || 0;
    }
  }
}
</script>
