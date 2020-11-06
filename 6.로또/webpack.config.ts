import path from 'path';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  name: 'lotto-dev',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      options: { plugins: ['react-refresh/babel'] },
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [
    new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/',
  },
  devServer: {
    publicPath: '/dist/',
    hot: true,
  }
};
export default config;
