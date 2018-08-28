<template>
    <section class="wrap">
        <listDetailUpdate :propsUpdateData="updateTodoItem" :flag="flag"></listDetailUpdate>
        <listDetailView></listDetailView>
    </section>
</template>


<script>
import listDetailUpdate from './listDetailUpdate.vue'
import listDetailView from './listDetailView.vue'

export default {
  name: "listDetail", 
  data() {
    return {
      updateTodoItem: this.$route.params,
      flag:false,
 
    };
  },
  mounted(){
    if(this.updateTodoItem['k']){
        this.flag = true
    }
   

  },
  components:{
    listDetailUpdate,
    listDetailView
  }
};
</script>

<style scoped>
 section:after{display:block; clear:both; content:'';}
</style>