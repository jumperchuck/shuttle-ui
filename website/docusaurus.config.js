const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const gitHubHref = 'https://github.com/jumperchuck/shuttle-ui';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shuttle UI',
  tagline: 'React Native & Web 移动端组件库',
  url: 'https://jumperchuck.github.io',
  baseUrl: process.env.NODE_ENV === 'development' ? '/' : '/shuttle-ui/',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  scripts: [{ src: 'https://snack.expo.io/embed.js', defer: true }],
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jumperchuck', // Usually your GitHub org/user name.
  projectName: 'shuttle-ui', // Usually your repo name.

  presets: [
    [
      /** @type {import('@docusaurus/preset-classic').Options} */
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${gitHubHref}/edit/master/website/`,
          remarkPlugins: [require('./plugins/remark-snackplayer')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    navbar: {
      title: 'Shuttle UI',
      logo: {
        alt: 'Shuttle UI Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs', label: '文档', position: 'right' },
        { to: '/docs/components/button', label: '组件', position: 'right' },
        {
          href: gitHubHref,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速上手',
              to: '/docs',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '提交bug或feature',
              to: `${gitHubHref}/issues/`,
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: gitHubHref,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shuttle UI`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
