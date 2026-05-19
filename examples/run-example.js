'use strict';

const path = require('path');
const { spawn } = require('child_process');

const [, , ...args] = process.argv;
const serverPath = path.resolve(
  __dirname,
  '..',
  'bin',
  'webpack-dev-server.js'
);

spawn('node', [serverPath, ...args], {
  stdio: 'inherit',
});
