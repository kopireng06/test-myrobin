import { createApp } from 'vue'
import App from './App.vue'
import Room from './Room.vue'
import JoinRoom from './JoinRoom.vue'
import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: JoinRoom },
  { path: '/room', component: Room },
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
