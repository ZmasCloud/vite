import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "麦麦备用插件仓库文档",
  description: "麦麦备用插件仓库",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 3],    // 显示 h1 到 h3 级别的标题
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '插件列表', link: 'https://5.zmascloud.xyz' },
      { text: '麦麦插件生成器', link: '/examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'plugin',
        collapsed: true,
        items: [
          { text: '关于插件生成器', link: '/quick-start/关于插件生成器' },
          { text: '关于v0.1', link: '/1/1' },
          { text: '关于v0.2', link: '/1/2' },
        ]
      },
      {
        text: 'Advanced',
        collapsed: false,
        items: [
          { text: 'Custom Theme', link: '/advanced/custom-theme' },
          { text: 'Markdown Extensions', link: '/advanced/markdown-extensions' },
          { text: 'Code Highlighting', link: '/advanced/code-highlighting' }
        ]
      },
      {
        text: 'Deployment',
        collapsed: false,
        items: [
          { text: 'Build for Production', link: '/quick-start/quick-start#build-for-production' },
          { text: 'GitHub Pages', link: '/quick-start/quick-start#deploy-to-github-pages' },
          { text: 'Netlify', link: '/quick-start/quick-start#netlify-deployment' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZmasCloud/maiplugin' }
    ]
  }
})
