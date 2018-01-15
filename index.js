'use strict';
const path = require('path');
const findUp = require('find-up');

module.exports = cwd =>
  findUp('package.json', {cwd})
    .then(filePath => filePath ? path.resolve(path.dirname(filePath), 'node_modules', '.bin') : null);

module.exports.sync = cwd => {
  const filePath = findUp.sync('package.json', {cwd});
  return filePath ? path.resolve(path.dirname(filePath), 'node_modules', '.bin') : null;
};
