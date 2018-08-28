import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/todoindex/index.vue'
import listDetailIndex from '../components/todoindex/listDetail/listDetailIndex.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path:'/listDetailIndex',
    name:'listDetailIndex',
    component:listDetailIndex
  }

]

})


export default router
