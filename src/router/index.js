import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from'../components/dashboard.vue'
import running from'../components/running.vue'
import contests from'../components/contests.vue'
import matches from'../components/matches.vue'
import practice from'../components/practice.vue'
import IDE from'../components/ide.vue'
import help from'../components/help.vue'
import login from '../components/login.vue'
Vue.use(VueRouter);

const routes=[
    {
       path:'/dashboard',
       component:Dashboard
    },
    {
        path:'/ide',
        component:IDE
    },
    {
        path:'/contests',
        component:contests
    },
    {
        path:'/running',
        component:running
    },
    {
        path:'/matches',
        component:matches
    },
    {
        path:'/practice',
        component:practice
    },
    {
        path:'/help',
        component:help
    },{
        path:'/login',
        component:login,
        name:"login"
    }

];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router
