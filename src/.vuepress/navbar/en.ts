import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "语文（Chinese）",
    icon: "building-columns",
    prefix: "/chinese/",
    children: [
      {text: "拼音（pinyin）", link: "pinyin/pinyin"},
      {text: "汉字（word）", link: "words/"},
      {text: "成语（idiom）", link: "idiom/"},
      {text: "故事（story）", link: "story/"},
    ]
  },
  {
    text: "English(英文)",
    icon: "building-columns",
    prefix: "/english/",
    children: [
      {text: "Story", link: "story"},
      {text: "Readings", link: "reading"},
    ]
  },

  //All the sample below
  /*
  {
    text: "Blog Guidance",
    link: "/demo/"
  },
  {
    text: "Post Sample",
    icon: "pen-to-square",
    prefix: "/demo/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
          { text: "Applexxx", icon: "author-icon", link: "xxx" },
        ],
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  }
  {
    text: "Github",
    icon: "/github.svg",
    link: "https://github.com/seamice/",
  },
  */
]);
