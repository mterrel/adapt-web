/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const React = require('react');
const { Announcement, GitHubLogo, GitHubStar } = require('adapt-web-components');
const admonitions = require('remarkable-admonitions');

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const repoUrl = 'https://github.com/unboundedsystems/adapt';
const gitterUrl = 'https://gitter.im/UnboundedSystems/Adapt';
const issueUrl = repoUrl + '/issues/new';
const forkUrl = repoUrl + '/fork';

const shadeOf = (base, { l = base.l, a = 100 } = {}) =>
  `hsla(${base.h}, ${base.s}%, ${l}%, ${a/100})`

const baseColor = {
  h: 197,
  s: 78,
  l: 53
};

const black = {
  h: 0,
  s: 0,
  l: 0,
};

// A darker version of baseColor with enough contrast (> 4.5) to be used for
// text on a white background.
const blueTextOnWhiteColor = shadeOf(baseColor, { l: 37 });

// A darker version of baseColor with enough contrast (> 4.5) to be used for
// text on a baseColor background (i.e. dark blue text on baseColor blue).
const darkBlueTextColor = shadeOf(baseColor, { l: 20 });

const colors = {
  primaryColor: shadeOf(baseColor),
  secondaryColor: blueTextOnWhiteColor,

  // Nav header
  searchPlaceholderColor: shadeOf(black, { l: 75 }),
  headerColor: shadeOf(black, { l: 60 }),

  scrollToTopColor: shadeOf(baseColor, { a: 50 }),

  lightBgColor: shadeOf(black, { l: 92 }),
  darkBgColor: shadeOf(black, { l: 30 }),

  // Text
  bodyTextColor: shadeOf(black, { l: 30 }),
  blueTextOnWhiteColor,
  darkBlueTextColor,

  // Text headings
  headingColor: shadeOf(black, { l: 20 }),
  headingDarkColor: shadeOf(black, { l: 20 }),
  subheadingColor: shadeOf(black, { l: 40 }),
};

const analytics =
  // Only insert Google Analytics in Netlify production builds
  process.env.CONTEXT === 'production' ?
    {
      gtmContainerId: "GTM-5HBPRVX"
    } :
    {};

const gitHubInfo = {
  projectName: 'adapt',
  organizationName: 'unboundedsystems',
  repoUrl,
  gitterUrl
}

const siteConfig = {
  title: 'Adapt',
  tagline: 'React for your infrastructure.',

  url: 'https://adaptjs.org',
  baseUrl: '/', // Base URL for your project */

  ...gitHubInfo,

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting_started/index', label: 'Docs' },
    { blog: true, label: 'Blog' },
    { page: 'help', label: 'Help' },
    { raw: githubHeader(gitHubInfo) },
  ],

  // If you have users set above, you add it here:
  //users,

  /* path to images for header/footer */
  headerIcon: 'img/logo_color.svg',
  footerIcon: 'img/logo_white.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors,

  /* Custom fonts for website */
  fonts: {
    bodyFont: [
      'Open Sans',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif',
    ],
    codeFont: [
      'Source Code Pro',
      'Menlo',
      'Monaco',
      'Consolas',
      'Courier New',
      'monospace',
    ]
  },
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Work+Sans:700|Open+Sans:400,400i,600,700&display=swap',
    'https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap',
    'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'
  ],

  // This copyright info is used in blog RSS/Atom feeds.
  copyright: `Copyright © 2019-${new Date().getFullYear()} Unbounded Systems`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'dracula',
  },
  usePrism: ['javascript', 'js', 'jsx', 'ts', 'tsx'],


  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    '/js/riveted.min.js',
    'https://code.jquery.com/jquery-1.11.0.min.js',
    'https://code.jquery.com/jquery-migrate-1.2.1.min.js',
    'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
    'https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js',
    '/js/github.js',
    '/js/common.js',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Twitter username for the site
  twitterUsername: 'adaptjs',

  // Button to share on twitter on blog pages
  twitter: true,
  blogSidebarCount: 'ALL',
  blogSidebarTitle: {
    all: 'Adapt Blog'
  },

  // Open Graph and Twitter card images.
  ogImage: 'img/adapt_logo2000x1000.png',
  twitterImage: 'img/adapt_logo2000x1000.png',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  markdownOptions: {
    html: true,
  },
  markdownPlugins: [
    admonitions({ icon: 'svg-inline' }),
  ],

  commentSystem: {
    type: "commento",
    blog: true,
  },

  ...analytics,

  algolia: {
    apiKey: '9927876eb8171c3357e612bd20e41a9a',
    indexName: 'unbounded_adapt',
  },
  scrollToTop: true,
  scrollToTopOptions: {
    backgroundColor: colors.scrollToTopColor,
  },
  issueUrl,
  forkUrl,
  announcement: SiteAnnounce(),
};

function githubHeader(config) {
  return React.createElement('div', { className: 'github' }, [
    React.createElement("a", { key: "link", href: config.repoUrl }, [
      React.createElement(GitHubLogo, { config, key: 'logo' })]),
    React.createElement(GitHubStar, { config, key: 'github', count: true, large: true })
  ]);
}

function SiteAnnounce() {
  return React.createElement(Announcement, {
    announceId: "v020",
    content: React.createElement("div", {}, [
      React.createElement("p", { key: "0" }, [
        React.createElement("i", { key: "0", className: "om om-party-popper om-lg" }),
        React.createElement("i", { key: "1", className: "om om-party-popper om-lg" }),
        " Adapt v0.2.0: now with Node.js v12 and v13 support, easier installs, and more! ",
        React.createElement("a", { key: "2", className: "announcement-link", href: "/blog/2020/03/16/adapt-release-0-2-0" }, [
          // \xA0 is &nbsp;
          "Read\xA0more..."
        ]),
      ])
    ])
  });
}

module.exports = siteConfig;
