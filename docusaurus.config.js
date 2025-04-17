// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ShopCtrl Knowledgebase",
  tagline:
    "The comprehensive knowledge base about the ShopCtrl Omnichannel Backoffice Software.",
  favicon: "img/shopctrl_favicon.svg",

  // Set the production url of your site here
  url: "https://docs.shopctrl.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ShopCtrl", // Usually your GitHub org/user name.
  projectName: "knowledgebase", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        //blog: {
        //  showReadingTime: true,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        //},
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom"),
    require.resolve('docusaurus-lunr-search')],
  //plugins: [
  //  ['drawio', {}],
  //],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ShopCtrl",
        logo: {
          alt: "ShopCtrl Logo",
          src: "img/shopctrl_favicon.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          //{ to: "/blog",  "Blog", position: "left" },
          {
            href: "https://www.shopctrl.com/docs/api",
            label: "API docs",
            position: "left",
          },
          {
            href: "https://shopctrl.com",
            label: "ShopCtrl Homepage",
            position: "right",
          },
        ],
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Intro",
                to: "/",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Contact us",
                href: "https://shopctrl.com/contact/contact-us",
              },
            ],
          },
          {
            title: "More",
            items: [
              //  {
              //   label: "API Docs",
              //   to: "/blog",
              // },
              {
                label: "API docs",
                href: "https://www.shopctrl.com/docs/api",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ShopCtrl`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
