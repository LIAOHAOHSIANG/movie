import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopicView from '../views/TopicView.vue'
import MovieView from '../views/MovieView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/topic',
    name: 'topic',
    component: TopicView
  },
  {
    path: '/movie',
    name: 'movie',
    component: MovieView
  }
]

const router = new VueRouter({
  routes
})

export default router
