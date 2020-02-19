import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Images from "@/views/Images.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/images",
    name: "images",
    component: Images
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
