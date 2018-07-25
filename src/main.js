import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Register from './components/Register'
import Contact from './components/Contact'
import Add from './components/Add'
import Edit from './components/Edit'


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueRouter)
const routes = [
    { path: '/', component: Home },
    { path: '/logIn', component: LogIn },
    { path: '/register', component: Register },
    { path: '/contact', component: Contact },
    { path: '/add', component: Add },
    { path: '/edit/:id', component: Edit }

];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})