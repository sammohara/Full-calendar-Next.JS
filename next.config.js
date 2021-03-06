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


// https://www.davidangulo.xyz/how-to-use-fullcalendar-in-next-js/
// https://codesandbox.io/s/fullcalendar-nextjs-10-forked-b1885?file=/next.config.js
// https://spacebro.io/articles/fullcalendar-nextjs-10-higher