import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from '../views/Loading'
import Results from '../views/Results'
import Selecting from '../views/Selecting'
import WaitForResults from '../views/WaitForResults'



const routes = [
  { path: '/', name: 'loading', component: Loading },
  { path: '/waitforresults', name: 'waitforresults', component: WaitForResults },
  { path: '/results', name: 'results', component: Results },
  { path: '/selecting', name: 'selecting', component: Selecting },
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router






