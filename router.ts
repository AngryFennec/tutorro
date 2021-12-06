import { Vue } from 'nuxt-property-decorator'
import Router from 'vue-router'
import Home from '~/pages/Home/Home.vue'
import Academic from '~/pages/Academic/Academic.vue'
import Chat from '~/pages/Chat/Chat.vue';
import History from '~/pages/History/History.vue';
import Shedule from '~/pages/Shedule/Shedule.vue';
import Students from '~/pages/Students/Students.vue';


Vue.use(Router)

export function createRouter(): Router {
  const router = new Router({
      mode: 'history',
      routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/academic',
          name: 'academic',
          component: Academic
        },
        {
          path: '/chat',
          name: 'chat',
          component: Chat
        },
        {
          path: '/last',
          name: 'history',
          component: History
        },
        {
          path: '/shedule',
          name: 'shedule',
          component: Shedule
        },
        {
          path: '/students',
          name: 'students',
          component: Students
        }
      ]
    }
  )
  return router
}
