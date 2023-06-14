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


/*
const path = require('path');

module.exports = {
  resolve: {
    // 対象にする拡張子の指定（パッケージも含まれるので、.jsは必須）
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  entry: {
    // エントリーポイントの指定
    client: './src/client.tsx',
  },
  output: {
    // 書き出し先のディレクトリを指定(assets)
    path: path.resolve(__dirname, 'assets'),
    // 書き出すファイルの名前を指定(名前は変更しない)
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // 拡張子が.jsか.jsxだった場合に適用するルール
        test: /\.ts(x?)$/,
        // node_modulesディレクトリは除外
        exclude: /node_modules/,
        use: [
          {
            // babelの設定
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                [
                  '@babel/preset-react',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};
*/