import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todoItems: []
  },
  actions: {
    addTodo(store, newTodoItem) {
      localStorage.setItem(newTodoItem, newTodoItem);
      store.commit('addTodo', newTodoItem)
    },
    removeTodo(store,payload){
      localStorage.removeItem(payload.todoItem);
      store.commit('removeTodo',payload)
    },
    removeAll(store){
      localStorage.clear();
      store.commit('removeAll')  
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todoItems.push(payload);
    },
    removeTodo(state,payload){
      state.todoItems.splice(payload.index, 1);
    },
    removeAll(state){
      state.todoItems = [];
    }
  }
})

export default store
