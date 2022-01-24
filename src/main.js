import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import VueRouter from "vue-router";
import "buefy/dist/buefy.css";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEdit,
  faEnvelope,
  faPhoneAlt,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
);

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueRouter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
