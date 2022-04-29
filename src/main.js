import Vue from 'vue'
import App from './App.vue'
// 引入 element-ui
import ElenmentUI from 'element-ui'
// 引入 element-ui的样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由
import router from '@/router'
import '@/assets/css/reset.css'
import '@/assets/css/container.css'
Vue.use(ElenmentUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册
  router
}).$mount('#app')
