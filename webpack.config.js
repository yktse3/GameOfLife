const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'GameOfLife',
    libraryTarget: 'window',
    libraryExport: 'default',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
