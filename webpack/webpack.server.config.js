const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const nodeModules = fs
  .readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .reduce(
    (modules, module) => Object.assign(modules, { [module]: `commonjs ${module}` }),
    {}
  );


const config = {
  entry: './source/server.jsx',
  output: {
    filename: 'index.js',
    path: './built/server',
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
        test: /\.html$/,
        loader: 'template-string',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['react'],
          env: {
            production: {
              plugins: [
                'transform-regenerator',
                'transform-runtime',
                'transform-react-constant-elements',
                'transform-react-inline-elements',
                'transform-minify-booleans',
                'transform-remove-console',
                'transform-remove-debugger',
                'transform-undefined-to-void',
              ],
              presets: ['es2015'],
            },
            development: {
              presets: ['latest-minimal'],
            },
          },
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules'),
      },
    ],
    postLoaders: [
      {
        test: /\.html$/,
        loader: 'babel',
        query: {
          plugins: ['transform-es2015-template-literals'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json', '.html'],
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin('../statics/styles.css'),
  ],
  eslint: {
    configFile: './.eslintrc',
    emitError: true,
    emitWarning: true,
  },
  externals: nodeModules,
};


if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require'],
      },
    })
  );
}


module.exports = config;
