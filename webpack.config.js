const TerserPlugin = require('terser-webpack-plugin');

  module.exports = {
    mode: 'production',
    optimization: {
      minimizer: [new TerserPlugin({ /* additional options here */ })],
    },
    entry: __dirname + '/src/Options.jsx',
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/client'
  }
};