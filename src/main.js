import Vue from 'vue'

import todoApp from './App.vue'
import VueRouter from 'vue-router'

import Antd from 'ant-design-vue'

import store from './store/index'
import "ant-design-vue/dist/antd.css";




import TodoListMain from './components/TodoListMain.vue';
import Main from './components/Main.vue';

Vue.use(Antd);
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/todoList/:name',
            component: TodoListMain
        },
        {
            path: '/',
            component: Main
        }
    ]
})

new Vue({
    render: h => h(todoApp),
    store,
    router,
}).$mount('#app')