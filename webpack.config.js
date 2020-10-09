const path = require('path');

module.exports = {
  entry: "./app/scripts/App.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  module: {
    rules: [{
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        use: [{
            loader: "file-loader",
          },
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  devServer: {
    before: function (app, server) {
      server._watch("./app/**/*.html");
    },
    port: 8080,
    contentBase: path.resolve(__dirname, "app"),
    hot: true
  },
  mode: "development"
}