<template>
  <div class="todo-list-page">
    <div class="container">
      <Header />
      <div class="main-container">
        <TodoInput @addTodo="addTodo" />
        <TodoRemaining :itemLeft="itemLeft" />
        <ul class="todo-list">
          <transition-group
            name="fade"
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUp"
          >
          <TodoItem
            v-for="todo in todosFilter"
            :key="todo.id"
            :todo="todo"
            @removedTodo="removeTodo"
            @updateStatus="updateStatus"
          />
          </transition-group>
        </ul>
      </div>
      <Footer
      :disabledActiveTab="disabledActiveTab"
      :showClearCompletedBtn="showClearCompletedBtn"
      @onClearCompleted="onClearCompleted" @filter="filter = $event" />
    </div>
  </div>
</template>

<script>
import TodoItem from './../components/features/TodoItem'
import TodoInput from './../components/features/TodoInput'
import TodoRemaining from './../components/features/TodoRemaining'
import Header from './../components/layouts/Header'
import Footer from './../components/layouts/Footer'
import { todoLocalStorage } from './../store/todoLocalStorage.js'

export default {
  name: 'ToDoList',
  components: {
    TodoItem,
    TodoInput,
    TodoRemaining,
    Header,
    Footer
  },
  data () {
    return {
      todos: todoLocalStorage.get("todos"),
      filter: 'all'
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
    updateStatus(id, completed) {
      this.todos.some(v => {
        return v.id === id ? v.completed = completed : false;
      });
    },
    onClearCompleted() {
      this.todos = this.todos.filter(v => !v.completed)
    },
    removeTodo(id) {
      this.todos.map((v, index) => {
        if (v.id === id) {
          this.todos.splice(index, 1);
        }
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
</style>
