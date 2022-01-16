import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import UIkit from "uikit";

Vue.prototype.$UIkit = UIkit;

Vue.config.productionTip = false;

document.title = "Remco's Portofolio";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
