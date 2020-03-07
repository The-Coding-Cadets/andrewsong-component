// const MinifyPlugin = require("babel-minify-webpack-plugin");

  module.exports = {
    mode: 'production',
    // optimization: {
    //   minimizer: [new MinifyPlugin({}, {
    //     test: [/\.jsx$/],
    //     exclude: /node_modules/,
    //   })],
    // },
    entry: __dirname + '/src/Options.jsx',
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env', 'minify']
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