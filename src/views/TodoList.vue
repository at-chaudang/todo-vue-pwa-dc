<template>
  <div class="todo-list-page">
    <div class="container">
      <Header />
      <TodoInput @addTodo="addTodo" class="mt-10" />
      <ul class="mt-20 todo-list">
        <transition-group
          name="fade"
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown"
        >
        <TodoItem
          v-for="todo in todosFilter"
          :key="todo.id"
          :todo="todo"
          @removedTodo="removeTodo"
          @updateStatus="updateStatus"
        />
        </transition-group>
        <li v-if="!todosFilter.length" class="txt-center message">You have not task! :(</li>
      </ul>
      <Footer :itemLeft="itemLeft"
      :showClearCompletedBtn="showClearCompletedBtn"
      @onClearCompleted="onClearCompleted" @filter="filter = $event" class="mt-20" />
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
