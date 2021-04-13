import Vue from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'
//import TaskList from './components/TaskList/Tasklist.vue'
//Vue.use(VueRouter);

//const router = new VueRouter({
//    routes:[
//       {
//            path: '/',
//            component: TaskList
//        }
//    ]
//})
Vue.config.productionTip = false

new Vue({
//    router,
  render: h => h(App),
}).$mount('#app')
