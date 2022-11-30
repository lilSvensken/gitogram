import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/styles/main.scss";

app.mount("#app");
const app = createApp(App);
app.use(router);
app.use(createPinia());
