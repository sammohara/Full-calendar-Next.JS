// /** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');
// const withSass = require('next-sass');

const withTM = require('next-transpile-modules')([
  '@fullcalendar/core',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/timegrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
  // '@babel/preset-react',
]);

module.exports = withTm({
  // Custom webpack config
});

// module.exports = withPlugins([[withTM], [withSass]], {
//   webpack: (config) => {
//     console.info();
//     return config;
//   },
// });
