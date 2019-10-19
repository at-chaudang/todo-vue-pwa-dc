<template>
  <div class="todo-list-page">
    <div class="container">
      <Header />
      <TodoInput @addTodo="addTodo" class="mt-10" />
      <ul class="mt-20 todo-list">
        <TodoItem
          v-for="(todo, index) in todosFilter"
          :key="todo.id"
          :todo="todo"
          :index="index"
          @removedTodo="removeTodo"
          @updateStatus="updateStatus"
        />
      </ul>
      <Footer @onClearCompleted="onClearCompleted" @filter="filter = $event" class="mt-20" />
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
      todos: todoLocalStorage.get("todos"),
      filter: 'all'
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
  computed: {
    itemLeft() {
      return this.todos.filter(v => !v.completed).length;
    },
    todosFilter() {
      switch (this.filter) {
        case 'active':
          return this.todos.filter(v => !v.completed);
        case 'completed':
          return this.todos.filter(v => v.completed);
        default:
          return this.todos;
      }
    },
    showClearCompletedBtn() {
      return this.todos.filter(v => v.completed).length > 0;
    }
  },
  methods: {
    addTodo(newTodo, id) {
      this.todos.unshift({
        id,
        title: newTodo,
        completed: false
      })
    },
    updateStatus(index, completed) {
      this.todos.some((v, i) => {
        return i === index ? v.completed = completed : false;
      });
    },
    onClearCompleted() {
      this.todos = this.todos.filter(v => !v.completed)
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
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
