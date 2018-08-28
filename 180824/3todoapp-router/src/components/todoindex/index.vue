<template>
  <section class="wrap">
    <todoHeader></todoHeader>
    <todoInput @emitAddTodo="appTodo"></todoInput>
    <todoList :propsdata="todoItems" @emitRemoveTodo="removeTodo"></todoList>
    <todoFooter @emitClearAll="clearAll"></todoFooter>
  </section>
</template>

<script>
import todoHeader from "./todoHeader.vue";
import todoInput from "./todoInput.vue";
import todoList from "./todoList.vue";
import todoFooter from "./todoFooter.vue";
import setTodoItems from "./setting/settodo.js";
export default {
  name: "index",
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    this.setTodoItems();

  },
  components: {
    todoHeader,
    todoInput,
    todoList,
    todoFooter
  },
  methods: {
    setTodoItems,
    appTodo(val) {
      if (!Date.now) {
        Date.now = function now() {
          return new Date().getTime();
        };
      }
      var dateNow = Date.now().toString();
      this.todoItems.push({ k: dateNow, val: val });
      val = JSON.stringify(val);
      localStorage.setItem(dateNow, val);
    },
    removeTodo(item) {
      var keyVal = item.k;
      var todoItems = this.todoItems;

      todoItems.forEach(function(item, index) {
        if (keyVal === item.k) {
          todoItems.splice(index, 1);
        }
      });

      localStorage.removeItem(keyVal);
    },
    clearAll() {
      this.todoItems = [];
      localStorage.clear();
    }
  }
};
</script>
