import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import CompanyHome from "./components/CompanyHome.vue";
import RedirectPage from "./components/RedirectPage.vue";
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    app.component("CompanyHome", CompanyHome);
    app.component("RedirectPage", RedirectPage);
  },
};
