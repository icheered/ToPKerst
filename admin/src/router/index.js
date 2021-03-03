import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import People from '../views/People'
import Questions from '../views/Questions'


const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/people', name: 'people', component: People },
  { path: '/questions', name: 'questions', component: Questions }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router






