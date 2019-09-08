/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const React = require('react');
const { GitHubLogo } = require('adapt-web-components');

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
  `hsla(${base.h}, ${base.s}%, ${l}%, ${a}%)`

const baseColor = {
  h: 197,
  s: 78,
  l: 53
};

const headingBase = {
  h: 214,
  s: 21,
  l: 44
};

const colors = {
  primaryColor: shadeOf(baseColor),
  secondaryColor: shadeOf(baseColor, { l: 39 }),
  scrollToTopColor: shadeOf(baseColor, { a: 50 }),

  headingColor: shadeOf(headingBase),
  subheadingColor: shadeOf(headingBase, { l: 60 }),
  headingDarkColor: shadeOf(headingBase, { l: 36 }),
};

const siteConfig = {
  title: 'Adapt',
  tagline: 'React for your infrastructure.',

  url: 'https://adapt.unbounded.systems',
  baseUrl: '/', // Base URL for your project */

  projectName: 'adapt',
  organizationName: 'unboundedsystems',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting_started/index', label: 'Docs'},
    {page: 'help', label: 'Help'},
    {href: repoUrl, label: githubHeader(this)},
    //{blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  //users,

  /* path to images for header/footer */
  headerIcon: 'img/logo_white.svg',
  footerIcon: 'img/logo_white.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors,

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Work+Sans:700&display=swap',
    'https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap',
    'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'
  ],

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Unbounded Systems`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'dracula',
  },
  usePrism: ['javascript', 'js', 'jsx', 'ts', 'tsx'],


  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://code.jquery.com/jquery-1.11.0.min.js',
    'https://code.jquery.com/jquery-migrate-1.2.1.min.js',
    'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/logo_stacked.svg',
  twitterImage: 'img/logo_stacked.svg',

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
  gaTrackingId: "UA-83531203-3",
  gaGtag: true,
  algolia: {
    apiKey: '9927876eb8171c3357e612bd20e41a9a',
    indexName: 'unbounded_adapt',
  },
  scrollToTop: true,
  scrollToTopOptions: {
    backgroundColor: colors.scrollToTopColor,
  },
  repoUrl,
  issueUrl,
  gitterUrl,
  forkUrl,
};

function githubHeader(config) {
  return React.createElement('div', { className: 'github' }, [
    React.createElement(GitHubLogo, { config, key: 'logo' }),
    React.createElement('span', { key: 'text' },
      'GitHub'
    )
  ]);
}

module.exports = siteConfig;
