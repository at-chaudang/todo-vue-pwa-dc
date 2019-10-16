<template>
  <div class="todo-list">
    <!-- TODO: -->
    <TodoItem
      v-for="(todo, index) in todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
    />
  </div>
</template>

<script>
import TodoItem from './../components/features/TodoItem'

export default {
  name: 'ToDoList',
  components: {
    TodoItem
  },
  data () {
    return {
      todos: [
        {
          id: 1,
          title: 'Học NodeJS',
          completed: true,
          editting: false
        },
        {
          id: 2,
          title: 'Học Angular 8',
          completed: false,
          editting: false
        },
        {
          id: 3,
          title: 'Học VueJS',
          completed: false,
          editting: false
        }
      ]
    }
  }
}
</script>
