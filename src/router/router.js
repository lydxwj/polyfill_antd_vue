import Vue from 'vue';
import Router from 'vue-router';
const Home = () => import( /* webpackChunkName: "home" */ '../views/home/home.vue');
Vue.use(Router);

export default new Router({
  linkActiveClass: 'selectedItem',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    }
  ]
});
