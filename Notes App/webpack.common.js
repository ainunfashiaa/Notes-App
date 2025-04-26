const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./index.js",
    login: "./src/script/view/login.js",
    signup: "./src/script/view/signup.js",
    home: ["./src/script/view/home.js", "./src/script/custom-elements.js"],
    profile: "./src/script/view/profile.js",
  },
  output: {
    filename: "[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./login.html",
      filename: "login.html",
      chunks: ["login"],
    }),
    new HtmlWebpackPlugin({
      template: "./signup.html",
      filename: "signup.html",
      chunks: ["signup"],
    }),
    new HtmlWebpackPlugin({
      template: "./home.html",
      filename: "home.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./profile.html",
      filename: "profile.html",
      chunks: ["profile"],
    }),
  ],
};
