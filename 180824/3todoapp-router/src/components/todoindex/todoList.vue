<template>
    <div>
        <ul>
            <li v-for="todoItem in propsdata" :key="todoItem.k">{{todoItem.val.score}}.{{todoItem.val.inputVal}}
                <button @click="listRemoveItem(todoItem)">x</button>
                <a href="#" @click.prevent="gotoListDetailIndex(todoItem)">detail</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "todoList",
  props: ["propsdata"],
  methods:{
      listRemoveItem(item){
          this.$emit("emitRemoveTodo",item);
      },
      gotoListDetailIndex(todoItem){
          this.$router.push({ name: 'listDetailIndex', params: todoItem }) 
      }
  }
};
</script>

<style scoped>
a{float:right}
button{float:right; margin-left:10px;}
</style>

