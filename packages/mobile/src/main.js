import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/util/rem'
// import Vant from 'vant'

// import 'vant/lib/vant-css/index.css'

// Vue.use(vant)
import Vant from 'vant'
import 'vant/lib/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')