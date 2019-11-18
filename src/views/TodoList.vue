<template>
  <div class="todo-list-page">
    <div class="container">
      <Header />
      <div class="main-container">
        <div class="remain-block">
          <TodoRemaining :itemLeft="itemLeft" />
        </div>
        <TodoInput @addTodo="addTodo" />
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
        :showClearCompletedBtn="showClearCompletedBtn"
        @onClearCompleted="onClearCompleted"
        @filter="filter = $event"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from "./../components/features/TodoItem";
import TodoInput from "./../components/features/TodoInput";
import TodoRemaining from "./../components/features/TodoRemaining";
import Header from "./../components/layouts/Header";
import Footer from "./../components/layouts/Footer";
import { todoLocalStorage } from "./../store/todoLocalStorage.js";
import firebase from "firebase/app";

export default {
  name: "ToDoList",
  components: {
    TodoItem,
    TodoInput,
    TodoRemaining,
    Header,
    Footer
  },
  created() {
    this.data = firebase.database().ref("todos/" + firebase.auth().currentUser.uid);
    this.data.on("value", snapshot => {
      const obj = snapshot.val() || [];
      this.todos = Object.keys(obj).map(function(key) {
        return {key, ...obj[key]};
      });
    });
  },
  data() {
    return {
      todos: [],
      filter: "all",
      data: null
    };
  },
  computed: {
    itemLeft() {
      return this.todos.filter(v => !v.completed).length;
    },
    todosFilter() {
      switch (this.filter) {
        case "active":
          return this.todos.filter(v => !v.completed);
        case "completed":
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
      });
      this.data
        .push({
          id,
          title: newTodo,
          completed: false
        })
        .then(() => {
        });
    },
    updateStatus(key, completed) {
      this.todos.some(v => {
        if (v.key === key) {
          this.data.child(key).update({completed});
          return true;
        }
        return false;
      });
    },
    onClearCompleted() {
      this.todos = this.todos.filter(v => {
        if (v.completed === true) {
          this.data.child(v.key).remove();
        } else {
          return v;
        }
      });
    },
    removeTodo(id) {
      this.todos.map((v, index) => {
        if (v.key === id) {
          this.todos.splice(index, 1);
        }
      });
      this.data.child(id).remove();
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
</style>
