/** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');
// const withSass = require('next-sass');
// co
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
]);

module.exports = withTM({});
