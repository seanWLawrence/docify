const { environment } = require('@rails/webpacker');
const WebpackAssetsManifest = require('webpack-assets-manifest');

const splitChunks = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

environment.config.merge(splitChunks);

// Should override the existing manifest plugin
environment.plugins.insert(
  'Manifest',
  new WebpackAssetsManifest({
    entrypoints: true, // default in rails is false
    writeToDisk: true, // rails defaults copied from webpacker
    publicPath: true, // rails defaults copied from webpacker
  })
);

module.exports = environment;
