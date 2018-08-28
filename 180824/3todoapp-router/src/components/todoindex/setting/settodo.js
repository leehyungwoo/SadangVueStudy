var setTodoItems = function () {
  delete localStorage["loglevel:webpack-dev-server"];
  var len = localStorage.length;
  if (this.todoItems) {
    for (var i = 0; i < len; i++) {
      var value = localStorage[localStorage.key(i)];
      value = JSON.parse(value)

      this.todoItems.push({
        k: localStorage.key(i),
        val: value
      });
    }
  } 

}



export default setTodoItems
