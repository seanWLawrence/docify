let path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, '../app/assets/javascripts/editor'),
    filename: 'index.js',
  },
};
