<template>
  <div class="todo-list-page">
    <div class="container">
      <Header />
      <TodoInput @addTodo="addTodo" class="mt-10" />
      <ul class="mt-20 todo-list">
        <TodoItem
          v-for="(todo, index) in todos"
          :key="todo.id"
          :todo="todo"
          :index="index"
        />
      </ul>
      <Footer />
    </div>
  </div>
</template>

<script>
import TodoItem from './../components/features/TodoItem'
import TodoInput from './../components/features/TodoInput'
import Header from './../components/layout/Header'
import Footer from './../components/layout/Footer'
import { todoLocalStorage } from './../assets/store/todoLocalStorage.js'

export default {
  name: 'ToDoList',
  components: {
    TodoItem,
    TodoInput,
    Header,
    Footer
  },
  data () {
    return {
      todos: todoLocalStorage.get("todos")
      // [
      //   {
      //     id: 1,
      //     title: 'Học NodeJS',
      //     completed: true,
      //     editting: false
      //   },
      //   {
      //     id: 2,
      //     title: 'Học Angular 8',
      //     completed: false,
      //     editting: false
      //   },
      //   {
      //     id: 3,
      //     title: 'Học VueJS',
      //     completed: false,
      //     editting: false
      //   }
      // ]
    }
  },
  methods: {
    addTodo(newTodo, id) {
      this.todos.unshift({
        id,
        title: newTodo,
        completed: false
      })
    }
  },
   watch: {
    todos: {
      handler(todos) {
        todoLocalStorage.set("todos", todos);
      },
      deep: true
    }
  }
}
</script>
