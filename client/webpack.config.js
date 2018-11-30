// need to add a proxy to our express backend

module.exports = options => {
    return {
      mode: 'development',
      entry: './index.js',
      output: {
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ],
          },
        ],
      },
    }
  }