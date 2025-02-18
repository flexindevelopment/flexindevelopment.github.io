// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flexin Development',
  tagline: 'FiveM best innovations',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://flexindevelopment.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'flexindevelopment', // Usually your GitHub org/user name.
  projectName: 'flexindevelopment.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/flexindevelopment/flexindevelopment.github.io/tree/main/docs',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/flexindevelopment/flexindevelopment.github.io/tree/main/blog',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Flexin Development',
        logo: {
          alt: 'Flexin Development Logo',
          src: 'img/logos/logo-standard.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/flexindevelopment/flexindevelopment.github.io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/flexgg',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@flexindevelopment',
              },
              {
                label: 'Line Up',
                href: 'https://discord.gg/lineup',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Tebex',
                href: 'https://flexin-development.tebex.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/flexindevelopment',
              },
            ],
          },
        ],
        copyright: `Copyright © 2021-${new Date().getFullYear()} Flexin Development.`,
        logo: {
          src: 'img/logos/logo-light.png',
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        appId: '267S8NPJ4F',
        apiKey: 'af0c822207e1640b526c451bb9369c0e',
        indexName: 'flexindevelopmentio',
        contextualSearch: true,
      },
    }),
};

export default config;
