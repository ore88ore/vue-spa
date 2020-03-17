import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Images from "@/views/Images.vue";
import Analytics from "@/views/Analytics.vue";

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
  },
  {
    path: "/analytics",
    name: "analytics",
    component: Analytics
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
