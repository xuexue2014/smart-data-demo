import Vue from "vue";
import VueRouter from "vue-router";
import adddata from '../components/content/addData';
import homepage from '../components/content/homePage';
import lookdata from '../components/content/lookData';
import usedata from '../components/content/useData';

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
