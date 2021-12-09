// /** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');
// const withSass = require('next-sass');

const withTM = require('next-transpile-modules')([
  '@fullcalendar',
  // '@babel/preset-react',
]);

module.exports = withTM({
  // Custom webpack config
});

// module.exports = withPlugins([[withTM], [withSass]], {
//   webpack: (config) => {
//     console.info();
//     return config;
//   },
// });
