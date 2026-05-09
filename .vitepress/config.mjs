import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ja-JP",
  appearance: false,
  rewrites: {
    // 左边：真实存在的文件路径（相对 srcDir）
    // 右边：希望它在站点中对应的“虚拟路径”
    // "aboutus.md": "index.md",
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "日本市場向けソフトウェア開発, オフショア開発, 中国開発拠点, 業務システム開発, QA, プロジェクト管理",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "ja_JP" }],
    ["meta", { property: "og:site_name", content: "成都雷耳兔科技有限公司" }],
    [
      "meta",
      {
        property: "og:title",
        content: "日本市場向けソフトウェア開発 | 成都雷耳兔科技有限公司",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "中国拠点の専任チームが、日本企業のソフトウェア開発、品質管理、納品後改善を支援します。",
      },
    ],
    ["meta", { name: "twitter:card", content: "summary" }],
  ],
  srcDir: "docs",
  title: "成都雷耳兔科技有限公司",
  description:
    "日本市場向けソフトウェア開発に特化した、中国拠点のオフショア開発チームです。",
  themeConfig: {
    // search: {
    //   provider: "local",
    // },
    outline: {
      label: "页面导航",
    },
    nav: [
      { text: "会社概要", link: "/#about" },
      { text: "技術能力", link: "/#skills" },
      { text: "工程品質", link: "/#engineering" },
      { text: "お問い合わせ", link: "/#contact" },
    ],
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "首页", link: "/" },
    //   { text: "演示站点", link: "https://h5-demo.rc1.le2.ltd/" },
    // ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],
    // nav: [
    //   { text: "首页", link: "/" },
    //   { text: "GitHub", link: "https://github.com/your-repo" },
    // ],
    sidebar: false,

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],

    footer: {
      message:
        '<a href="http://beian.miit.gov.cn" target="_blank">蜀ICP备2024116916号-1</a>',
      // 动态年份
      copyright: `Copyright © 2021-${new Date().getFullYear()} Le2.ltd 版权所有`,
    },
  },

  vite: {
    server: {
      port: 3000, // 你想要的端口号
      host: "0.0.0.0", // 如果需要对局域网开放，也可以加上 host
    },
  },
});
