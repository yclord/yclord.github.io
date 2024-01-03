import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Story",
      icon: "/assets/icon/common/work.svg",
      prefix: "chinese/",
      children: "structure",
    },
    "intro"
  ],
});
