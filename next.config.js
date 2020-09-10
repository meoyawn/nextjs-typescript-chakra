const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

// runtime script

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

]);
