'use strict';

const ver = process.versions.node;
const majorVer = parseInt(ver.split('.')[0], 10);

if (majorVer < 8) {
  module.exports = require('./src/legacy');
} else {
  module.exports = require('./src/modern');
}
