const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    // 明确指定允许访问的主机
    // 这将确保我们的合法验证请求能够通过主机检查
    allowedHosts: ['localhost', '127.0.0.1'],
  },
};
