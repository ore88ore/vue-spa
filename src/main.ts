import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueGtag from "vue-gtag";

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GA_ID,
    params: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      send_page_view: false
    }
  }
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
