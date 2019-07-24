import Vue from 'vue'
import todoApp from './TodoList.vue'
import store from './store/index'


Vue.config.productionTip = false

new Vue({
  render: h => h(todoApp),
  store
}).$mount('#app')
