import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "sellerPage",
    component: () => import("../views/SellerPage.vue"),
  },
  {
    path: "/trend",
    name: "trend",
    component: () => import("../views/TrendPage.vue"),
  },
  {
    path: "/map",
    name: "map",
    component: () => import("../views/MapPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
