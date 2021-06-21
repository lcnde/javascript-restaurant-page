const path = require('path'); //it is a library present by default in nodejs

module.exports = {
  mode: "development",
  entry: './src/index.js', //tells webpack where to take the code from
  output: {
    filename: 'main.js', //tells webpack the name to use for the output file
    path: path.resolve(__dirname, 'dist'),//uses the path library to find the dist library that will be used as destination for the file that webpack will create

    //by adding the build: webpack inside the package.js we can use "npm run build" and it will use this config file to run the webpack
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
