import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import element from 'element-ui';
import VueI18n from 'vue-i18n';
import zh from './common/lang/zh.js';
import en from './common/lang/en.js';
// hello word  daijiba

Vue.config.productionTip = false
Vue.use(element)
Vue.use(VueI18n);
const messages = {
    "zh-CN":{...zh},
    "en-US":{...en}
}
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale 
  messages
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
