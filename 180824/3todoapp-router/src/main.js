import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.prototype.$isEmpty = function (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}





new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
