const mutations= {
  addTodo(state, payload) {
    state.todoItems.push(payload);
  },
  removeTodo(state, payload) {
    state.todoItems.splice(payload.index, 1);
  },
  removeAll(state) {
    state.todoItems = [];
  }
}

module.exports = mutations