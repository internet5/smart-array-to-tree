const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'smartArrayToTree.js',
    path: path.resolve(__dirname, 'dist')
  }
};