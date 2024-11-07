import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";
//import { searchProPlugin } from "vuepress-plugin-search-pro";
//import { cut } from "nodejs-jieba";
const __dirname = getDirname(import.meta.url);

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
  alias: {
    "@PinYin_help": path.resolve(__dirname, "components/pinyin_help.vue"),
    "@PinYin": path.resolve(__dirname, "components/pinyin_popup.vue"),
    "@Test": path.resolve(__dirname, "components/test.vue"),
    "@Book": path.resolve(__dirname, "components/book.vue"),
    "@Timeline": path.resolve(__dirname, "components/timeline.vue"),
    "@ImageZoom": path.resolve(__dirname, "components/img_zoom.vue")
  },
  // Enable it with pwa
  // shouldPrefetch: false,
  head: [
    // Other head elements...
    ['script', { src: '/src/js/audio.js' }],
    ['script', { async: "", src: 'https://www.googletagmanager.com/gtag/js?id=G-9Q47G5TKJV'}],
    ['script', { src: '/src/js/gtag.js' }],
  ],
});
