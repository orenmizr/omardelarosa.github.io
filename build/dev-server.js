const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const PORT = 8085;

config.entry.app.unshift(`webpack-dev-server/client?http://localhost:${PORT}/`);

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  stats: { colors: true },
  hot: true,
  publicPath: '/dist',
});

server.listen(8085);
