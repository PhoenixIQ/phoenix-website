module.exports = {
  title: 'Phoenix',
  tagline: 'phoenix是一个消息驱动的有状态微服务框架',
  url: 'http://phoenix-website.sz.iquantex.com/',
  baseUrl: '/',
  favicon: 'img/phoenix.png',
  organizationName: 'quantex', // Usually your GitHub org/user name.
  projectName: 'phoenix', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Phoenix',
      logo: {
        alt: 'Phoenix Logo',
        src: 'img/phoenix.png',
      },
      links: [
        {to: 'docs/phoenix-2.x/quick-start/phoenix-lite-2x', label: '文档', position: 'left'},
        {to: 'blog', label: '博客', position: 'left'},
        {to: 'blog', label: '建议', position: 'left'},
        {to: 'blog', label: '下载', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/phoenix-2.x/quick-start/phoenix-lite-2x',
            },
            // {
            //   label: '待添加',
            //   to: '',
            // },
          ],
        },
        {
          title: 'Demo',
          items: [
            {
              label: 'bank-account',
              href: 'https://gitlab.iquantex.com/phoenix-public/bank-account.git',
            },
            // {
            //   label: 'Discord',
            //   href: 'https://discordapp.com/invite/docusaurus',
            // },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            // {
            //   label: '待添加',
            //   href: '',
            // },
            // {
            //   label: 'Twitter',
            //   href: 'https://twitter.com/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright Â© ${new Date().getFullYear()} Phoenix Group`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'http://phoenix-website.sz.iquantex.com/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
