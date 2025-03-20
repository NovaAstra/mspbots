import Vue from 'vue'
import microApp from '@micro-zoe/micro-app'
import App from './App.vue'

Vue.config.productionTip = false

microApp.start()

new Vue({
  render: h => h(App),
}).$mount('#app')
