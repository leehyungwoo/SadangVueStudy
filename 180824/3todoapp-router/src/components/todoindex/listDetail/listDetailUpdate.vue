<template>
  <div id="listDetailUpdate">
    <input type="text" id="updateInput" v-model="todoItem.val.inputVal">
    <label for="a">0</label><input type="radio" id="a" name="score" v-model="todoItem.val.score" :value="0" checked>
    <label for="b">1</label><input type="radio" id="b" name="score" v-model="todoItem.val.score" :value="1">
    <label for="c">2</label><input type="radio" id="c" name="score" v-model="todoItem.val.score" :value="2">
    <button v-if="flag" @click="update">수정</button>
    <button v-if="!flag" @click="addTodo">입력</button>
    <button @click="goto">뒤로</button>
  </div>
</template>

<script>
export default {
  name: "listDetailUpdate",
  props: {
    propsUpdateData: Object,
    flag: Boolean
  },
  data() {
    return {
      todoItem: this.propsUpdateData
    };
  },
  mounted() {
    document.getElementById("updateInput").focus();
  },
  methods: {
    update() {
      var todoItem = this.todoItem;
      todoItem.val = JSON.stringify(todoItem.val);
      localStorage.setItem(todoItem.k, todoItem.val);
      this.goto();
    },
    addTodo() {
      if (!Date.now) {
        Date.now = function now() {
          return new Date().getTime();
        };
      }
      var dateNow = Date.now().toString();
      var todoItem = this.todoItem;
      localStorage.setItem(dateNow, todoItem.val);
    },
    goto() {
      this.$router.push("/");
    }
  }
};
</script>


<style scoped>
#listDetailUpdate {
  float: left;
  height: 100%;
  background: red;
}
</style>
