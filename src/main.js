import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import router from './router';
import { Icon } from "@iconify/vue";
import DefaultLayout from './layouts/DefaultLayout.vue'
import ChartOne from './components/Charts/ChartOne.vue'
import CardsHeader from './components/cards/CardsHeader.vue'
import TableOne from './components/Tables/TableOne.vue'
createApp(App)
    .component("IconVue", Icon)
    .component("DefaultLayout", DefaultLayout)
    .component("ChartOne", ChartOne)
    .component("CardsHeader", CardsHeader)
    .component("TableOne", TableOne)
    .use(router)
    .mount("#app");
