const webpack = require('webpack'); 
 

module.exports = {
webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
config.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }))
return config;
},
eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['www.hocomoco.in'],
  },

}
 
