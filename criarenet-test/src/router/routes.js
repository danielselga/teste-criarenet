import Vue from 'vue'
import VueRouter from 'vue-router'
import DataTable from '../components/DataTable.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: DataTable },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
