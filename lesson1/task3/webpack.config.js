const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 1. ОБЯЗАТЕЛЬНО: Указываем режим. По умолчанию ставим development, 
  // либо Webpack будет ругаться при сборке.
  mode: 'development', 

  entry: './src/index.js', 
  
  output: {
    path: path.resolve(__dirname, 'review_build'), 
    filename: 'bundle.js',
    clean: true, 
  },

  // 2. ВАЖНО: Помогаем Webpack находить файлы модулей
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Исправлено регулярное выражение (добавлен экранирующий слэш и поддержка jsx)
        exclude: /node_modules/, // Чтобы не компилировать код внутри node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.css$/, // Исправлено регулярное выражение для CSS
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      // Проверьте, где лежит ваш файл! Если в папке public, то измените на "./public/index.html"
      template: "./src/index.html" 
    })
  ]
};