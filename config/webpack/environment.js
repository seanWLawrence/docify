const { environment } = require('@rails/webpacker');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const path = require('path');

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

let ROOT_PATH = path.resolve(__dirname, '../../app/javascript/frontend/src');

environment.config.set('resolve.alias', {
  '@components': path.resolve(ROOT_PATH, 'components'),
  '@config': path.resolve(ROOT_PATH, 'config'),
  '@mutations': path.resolve(ROOT_PATH, 'mutations'),
  '@pages': path.resolve(ROOT_PATH, 'pages'),
  '@queries': path.resolve(ROOT_PATH, 'queries'),
});

module.exports = environment;
