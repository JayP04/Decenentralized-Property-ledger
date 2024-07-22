// webpack.config.js
const path = require('path');

module.exports = {
  // Other configurations...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'), // Adjust this path as necessary
    },
  },
};