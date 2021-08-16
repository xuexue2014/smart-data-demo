import Vue from "vue";
import VueRouter from "vue-router";
import adddata from '../views/addData';
import homepage from '../views/homePage';
import lookdata from '../views/lookData';
import usedata from '../views/useData';

Vue.use(VueRouter);

const routes = [
  {path:'/',component:homepage},
  {path:'/adddata',component:adddata},
  {path:'/homepage',component:homepage},
  {path:'/lookdata',component:lookdata},
  {path:'/usedata',component:usedata},
];

const router = new VueRouter({
  routes,
});

export default router;
