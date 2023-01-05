import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const mountMarketplace = (el: Element) => {
  const app = createApp(App);
  app.use(store).use(router).mount(el);

  return app;
};

const devRoot = document.querySelector("#marketplace");
if (devRoot) {
  mountMarketplace(devRoot);
}

export default mountMarketplace;
