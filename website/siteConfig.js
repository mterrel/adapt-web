/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

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
    {href: repoUrl, label: "GitHub"},
    //{blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  //users,

  /* path to images for header/footer */
  headerIcon: 'img/logo_white.svg',
  footerIcon: 'img/logo_white.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#28aee4',
    secondaryColor: '#1685b1',
  },

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
    'https://fonts.googleapis.com/css?family=Roboto&display=swap',
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
    backgroundColor: 'rgba(40, 174, 228, 0.5)'
  },
  repoUrl,
  issueUrl,
  gitterUrl,
  forkUrl,
};

module.exports = siteConfig;
