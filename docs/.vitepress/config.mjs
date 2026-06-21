import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '丸子玄学笔记',
  description: '西方神秘学 & 东方玄学 个人学习wiki',
  lang: 'zh-CN',
  base: '/',

  themeConfig: {
    nav: [
      { text: '学习路线', link: '/roadmap' },
      { text: '西方神秘学', link: '/western/' },
      { text: '东方玄学', link: '/eastern/' },
      { text: '读书笔记', link: '/reading-notes/' },
      { text: '实战记录', link: '/practice/' },
      { text: '工具箱', link: '/tools/' },
    ],

    sidebar: {
      '/western/': [
        { text: '西方神秘学', collapsed: false, items: [
          { text: '概述', link: '/western/' },
          { text: '塔罗牌', link: '/western/tarot' },
          { text: '雷诺曼', link: '/western/lenormand' },
          { text: '占星术', link: '/western/astrology' },
          { text: '西方数术', link: '/western/numerology' },
        ]},
      ],
      '/eastern/': [
        { text: '东方玄学', collapsed: false, items: [
          { text: '概述', link: '/eastern/' },
          { text: '八字', link: '/eastern/bazi' },
          { text: '紫微斗数', link: '/eastern/ziwei' },
          { text: '易经占卜', link: '/eastern/iching' },
          { text: '奇门遁甲', link: '/eastern/qimen' },
        ]},
      ],
      '/reading-notes/': [
        { text: '读书笔记', collapsed: false, items: [
          { text: '概述', link: '/reading-notes/' },
          { text: '笔记模板', link: '/reading-notes/template' },
        ]},
      ],
      '/practice/': [
        { text: '实战记录', collapsed: false, items: [
          { text: '概述', link: '/practice/' },
          { text: '记录模板', link: '/practice/template' },
        ]},
      ],
      '/tools/': [
        { text: '工具箱', collapsed: false, items: [
          { text: '概述', link: '/tools/' },
          { text: '排盘工具', link: '/tools/divination-tools' },
          { text: '书单', link: '/tools/book-list' },
        ]},
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/etherealstarry/maruko-esoteric-wiki' },
    ],

    footer: {
      message: '个人学习笔记，持续更新中',
      copyright: '© 2026 丸子',
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
})
