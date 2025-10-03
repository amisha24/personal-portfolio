
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/personal-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/personal-portfolio/about",
    "route": "/personal-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/personal-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/personal-portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/personal-portfolio/education"
  },
  {
    "renderMode": 2,
    "route": "/personal-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/personal-portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 22638, hash: '2067dd708675e42814baa7126d072c3a76e66b231a527788f5ea838922bc38a5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7083, hash: 'f9f1bd2209d580c8b32bc870d597f2c98a3618885c0a40d0a5d77ffa7fb8f6cc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'education/index.html': {size: 27475, hash: 'd7728fec1c71ce2c0ef3e79d3ceabb01a269876e0a2726d3f5943b66d92913eb', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 28673, hash: '860c239690d823d2536a792ca3223ce48934d735f7cde1b186cd40e77d998335', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 28815, hash: 'b6b21e6acc79534dea988e6eef1f1651408272eb1dd60461504c3734108e365f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27047, hash: 'e8aa52bd61d5aff0f591a9df20d8e2d32858c71523fbdc18aca0b2121ad2bfe5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 31132, hash: '44f74e82ca4cc5702b6b36a25b04ed42ca3105a1fad712c85d0974f777e48727', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-IN66QJSB.css': {size: 19498, hash: '9priMfbh7pA', text: () => import('./assets-chunks/styles-IN66QJSB_css.mjs').then(m => m.default)}
  },
};
