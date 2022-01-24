import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Checkin from "../views/Checkin.vue";
import Success from "../views/Success.vue";
import Inscriptions from "../views/Inscriptions.vue";
import FinishCheckin from "../views/FinishCheckin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/checkin",
    name: "Checkin",
    component: Checkin,
  },
  {
    path: "/checkin/email-enviado",
    name: "Success",
    component: Success,
  },
  {
    path: "/checkin/finalizado",
    name: "FinishCheckin",
    component: FinishCheckin,
  },
  {
    path: "/inscripciones",
    name: "Inscriptions",
    component: Inscriptions,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
