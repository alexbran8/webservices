// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  
  env: {
    PUBLIC_URL: '/',
  },
  // basePath: '/webservices',
  images: {
    loader: 'akamai',
    path: '',
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/products": { page: "/products" },
      "/projects": { page: "/projects" },
      "/contact": { page: "/contact" },
    }
  },
  assetPrefix: !debug ? '/' : '',
  output: 'export',
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config

    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }/*,
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
}
