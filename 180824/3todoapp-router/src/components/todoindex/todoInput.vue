<template>
    <div>
        <input type="text" id="todoInput" v-model.trim="inputVal" @keyup.enter="inputAddTodo">
        <label for="a">0</label><input type="radio" id="a" name="score" v-model="score" :value="0" checked>
        <label for="b">1</label><input type="radio" id="b" name="score" v-model="score" :value="1">
        <label for="c">2</label><input type="radio" id="c" name="score" v-model="score" :value="2">
        <button @click="inputAddTodo">추가</button>
        
    </div>
</template>

<script>
export default {
  name: "todoInput",
  data() {
    return { inputVal: "", score:0};
  },
  mounted(){
          document.getElementById('todoInput').focus();

  },
  methods: {
    inputAddTodo() {
      this.$emit("emitAddTodo", {inputVal:this.inputVal,score:this.score});
      this.inputVal="";
      this.score=0;
      document.getElementById('todoInput').focus();
    }
  }
};
</script>
