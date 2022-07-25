/*
 * @Author: Mocha
 * @Date: 2022-07-25 11:48:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-25 16:53:32
 * @Description:
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";

const app = createApp(App);
app.use(router).use(store).mount("#app");
