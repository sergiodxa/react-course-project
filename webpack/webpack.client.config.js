const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: './source/client.jsx',
  output: {
    filename: 'app.js',
    path: './built/statics',
    publicPath: 'http://localhost:3001/',
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2016', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules'),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  target: 'web',
  plugins: [
    new ExtractTextPlugin('../statics/styles.css'),
  ],
  eslint: {
    configFile: './.eslintrc',
    emitError: true,
    emitWarning: true,
  },
};
