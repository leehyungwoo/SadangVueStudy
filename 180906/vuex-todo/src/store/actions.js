const actions = {
  addTodo(store, newTodoItem) {
    localStorage.setItem(newTodoItem, newTodoItem);
    store.commit("addTodo", newTodoItem);
  },
  removeTodo(store, payload) {
    localStorage.removeItem(payload.todoItem);
    store.commit("removeTodo", payload);
  },
  removeAll(store) {
    localStorage.clear();
    store.commit("removeAll");
  }
}

module.exports = actions
