
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Режим сборки: 'development' для разработки или 'production' для продакшена
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"]
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
  };
