import {Vue} from 'nuxt-property-decorator';
import Router from 'vue-router';
import Home from "~/pages/Home/index.vue";

Vue.use(Router);

export function createRouter(): Router {
  const router = new Router({
      mode: 'history',
      routes: [
        {
          path: '/',
          component: Home
        },{
          path: '/academ',
          component: Home,
        },
      ],
    }
  );
  return router;
}
