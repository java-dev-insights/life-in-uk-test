import { defineConfig } from 'vitepress';
import { vitepressMermaidPreview } from 'vitepress-mermaid-preview';

// Check if the build environment is GitHub Actions
const IS_GITHUB_ACTIONS = process.env.GITHUB_ACTIONS === 'true';

const defaultTopNav = [
      { text: 'Home', link: '/' },
      { text: 'Chapters', link: '/chapters'},
      { text: 'Book Test', link: 'https://www.gov.uk/life-in-the-uk-test' },
    ];

const sidebarDefault = [
      { text: 'Overview', link: '/chapters/' },
      {
        collapsed: false,
        text: 'Chapters',
        items: [
          { text: 'Chapter 1', link: '/chapters/1-' },
          { text: 'Chapter 2', link: '/chapters/2-' },
          { text: 'Chapter 3', link: '/chapters/3-' },
          { text: 'Chapter 4', link: '/chapters/4-' },
          { text: 'Chapter 5', link: '/chapters/5-' },
        ]
      },
      {
        collapsed: true,
        text: 'Test References',
        items: [
          { text: 'Reference 1', link: 'https://lifeintheuktestweb.co.uk/tests/' },
          { text: 'Reference 2', link: 'https://britizen.uk/practice/life-in-the-uk-test' },
          { text: 'Chapter 3', link: '/chapters/3-' },
          { text: 'Chapter 4', link: '/chapters/4-' },
        ]
      },
    ];

const sidebarUtils = [
  { 
    collapsed: true,
    text: 'Media', 
    items: [
      { text: 'Images', link: '/utils/images' },
      { text: 'Youtube', link: '/utils/youtube' },
    ] 
  },
  { 
    collapsed: true,
    text: 'Diagrams', 
    items: [
      { text: 'Mermaid', link: '/utils/mermaid' },
      { text: 'Maths', link: '/utils/maths' },
    ] 
  }
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "life-in-uk-test",
  description: "life-in-uk-test",
  // Use repository name for GitHub Pages, fallback to root '/' for Netlify
  base: IS_GITHUB_ACTIONS ? '/life-in-uk-test' : '/',
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
		["link", { rel: "icon", href: "icons/favicon.ico" }],
		["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
		["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: '' }],
		["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bungee&display=swap" }],
	],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: defaultTopNav,
    sidebar: {
      "/": sidebarDefault,
      "/utils/": sidebarUtils,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: { provider: 'local' },
		// TODO: Agolia AI search
  },
  markdown: {
    math: true,
    config: (md) => {
      vitepressMermaidPreview(md, {
        showToolbar: false, // Global setting: whether to show toolbar by default
      });
    },
  },
})
