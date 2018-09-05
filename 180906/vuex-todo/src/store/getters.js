const getters = {
  todos(state) {
    if(state.getterInit){
      delete localStorage['loglevel:webpack-dev-server']
      if (localStorage.length > 0) {
        for (var i = 0; i < localStorage.length; i++) {
          state.todoItems.push(localStorage.key(i));
        }
      }
      state.getterInit=false;
    }
    return state.todoItems
  }
}

module.exports = getters