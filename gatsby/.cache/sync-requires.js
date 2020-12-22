const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dylanedwards/Jeraldo.me/gatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/dylanedwards/Jeraldo.me/gatsby/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/dylanedwards/Jeraldo.me/gatsby/src/pages/about.js"))),
  "component---src-pages-content-js": hot(preferDefault(require("/Users/dylanedwards/Jeraldo.me/gatsby/src/pages/content.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/dylanedwards/Jeraldo.me/gatsby/src/pages/index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("/Users/dylanedwards/Jeraldo.me/gatsby/src/pages/portfolio.js")))
}

