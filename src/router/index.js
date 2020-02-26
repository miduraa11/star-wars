import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../views/Login.vue"
import List from "../views/List.vue"
import store from "../store"

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: '/list'
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.loggedIn) {
        next("/list")
      } else {
        next()
      }
    }
  },
  {
    path: "/list",
    name: "List",
    component: List,
    beforeEnter: (to, from, next) => {
      if (store.state.auth.loggedIn) {
        next()
      } else {
        next("/login")
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
