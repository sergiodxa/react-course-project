const client = require('./webpack/webpack.client.config.js');
const server = require('./webpack/webpack.server.config.js');

module.exports = [
  client,
  server,
];
