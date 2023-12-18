const path = require('path');

module.exports = {
   context: path.resolve(__dirname, 'src'),
   entry: './index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
   }
}