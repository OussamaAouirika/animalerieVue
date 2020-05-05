import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";

Vue.use(VueRouter)
export default newVueRouter({ 
 routes : [
  {
    path: "/",
    component: Home
  },
  {
    path: "/home/:user?",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  }
]
})