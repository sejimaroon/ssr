const path = require('path');

module.exports = {
  entry: './server/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath:"/",
  },
  target: "node",
  mode: 'production',
  module: {
    rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
            }
          }
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
      ],
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx', '.jsx', '.json' ],
    alias: {
      react: require.resolve('react'),
    },
  },
};
