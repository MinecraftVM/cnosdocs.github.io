import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'CentNet-OS Docs',

  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [{icon: 'github', link: 'https://github.com/MinecraftVM'}],
    logo: "/Logo.png",
    nav: [
      {
        text: "首页",
        link: "https://centnet-os.top/",
      },
    ],

    sidebar: [
      {
        text: "开始",
        items: [
          { text: "写在前面", link: "/start/start" },
        ],
      },
      {
        text: "总览",
        items: [
          { text: "日志", link: "/overview/log" },
          { text: "感谢", link: "/overview/thanks" },
          { text: "瞎扯", link: "/overview/something" },
          { text: "用户协议", link: "/overview/contract" },
        ],
      },
      {
        text: "常见问题",
        items: [
          { text: "CE-RAMOS是什么？", link: "/faq/what_ce" },
          { text: "是否有后门，流氓行为？", link: "/faq/safety" },
          { text: "CE-RAMOS支持WIFI吗？", link: "/faq/wifi" },
          { text: "开始菜单和设置打不开怎么办？", link: "/faq/uwp_apps" },
        ],
      },
      {
        text: "教程",
        items: [
          { text: "如何下载CE-RAMOS？", link: "/course/down" },
        ],
      },
    ],
    footer: {
      copyright: "© CentNet OS开发团队",
    },
    editLink: {
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/MinecraftVM'
    },
  },
});
