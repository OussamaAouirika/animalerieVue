import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./Home.vue";
import About from "./About.vue";
import Edit from "./Edit.vue";
import Add from "./Add.vue";
import Listing from "./Listing.vue";


Vue.use(VueRouter)
export default new VueRouter({ 
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
  },
  {
    path: "/listing",
    name: "listing",
    component: Listing
  },
  {
    path: "/edit/:anim",
    name: "edit",
    component: Edit
  },
  {
    path: "/add",
    name: "add",
    component: Add
  }
]
})