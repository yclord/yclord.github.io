import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
//import { searchProPlugin } from "vuepress-plugin-search-pro";
//import { cut } from "nodejs-jieba";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Yichi's Blog",
      description: "Yichi's page",
    },
    //"/zh/": {
    //  lang: "zh-CN",
    //  title: "海越个人博客",
    //  description: "个人技术生活记录",
    //},
  },
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
  head: [
    // Other head elements...
    ['script', { src: '/src/js/audio.js' }],
    ['script', { async: "", src: 'https://www.googletagmanager.com/gtag/js?id=G-9Q47G5TKJV'}],
  ],
});
