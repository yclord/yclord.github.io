import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "中文",
      prefix: "chinese/",
      children: "structure",
    },
    {
      text: "英文",
      prefix: "english/",
      children: "structure",
    },
    {
      text: "学习笔记",
      prefix: "study_pathway/",
      children: "structure",
    },
    "intro"
  ],
});
