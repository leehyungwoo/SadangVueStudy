<template>
  <div id="listDetailView">
    <h2>detail List Component</h2>
    <a href="#" @click="all">전체</a>
    <a href="#" @click="zero">0</a>
    <a href="#" @click="own">1</a>
    <a href="#" @click="two">2</a><br> 


     <ul>
       <li v-for="con in abc" :key="con.k">{{con.val.score}}.{{con.val.inputVal}}</li>
     </ul>
  </div>
</template>

<script>
import setTodoItems from "../setting/settodo.js";
export default {
  name: "listDetailView",
  data() {
    return {
      todoItems: [],
      viewtodoITems: []
    };
  },
  created() {
    this.setTodoItems();
    this.viewtodoITems = this.todoItems;
  },
  computed: {
    abc: {
      get: function() {
        return this.viewtodoITems;
      },
      set: function(newValue) {
      
        var arr = this.todoItems.filter(item => {
          return item.val.score == parseInt(newValue);
        });
        return this.viewtodoITems = arr;
      }
    }
  },
  methods: {
    setTodoItems,
    all() {
      this.viewtodoITems = this.todoItems;
    },
    zero() {
      this.abc = 0;
    },
    own() {
      this.abc = 1;
    },
    two() {
      this.abc = 2;
    }
  }
};
</script>


<style scoped>
#listDetailView {
  height: 100%;
  background: blue;
}
li{list-style:none; border-bottom:1px solid black;}
</style>
