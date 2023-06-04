import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { MotionPlugin } from "@vueuse/motion";
import AOS from "aos";
import "aos/dist/aos.css";
import VueSplide from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
AOS.init();
createApp(App)
  .use(store)
  .use(router)
  .use(MotionPlugin)
  .use(VueSplide)
  .mount("#app");
