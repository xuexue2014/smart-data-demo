import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import '../src/assets/icon/iconfont.css';
import * as echarts from 'echarts';

Vue.use(ElementUI);
// Vue.use(echarts);

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

Vue.prototype.$store = store;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
