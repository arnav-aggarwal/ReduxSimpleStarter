module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      test: /\.jsx?$/,
      query: {
        presets: ['react', 'es2017', 'stage-0']
      }
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
