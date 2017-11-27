'use strict';
const path = require('path');
const findUp = require('find-up');

module.exports = async cwd => {
  const filePath = await findUp('package.json', {cwd});
  return filePath && path.join(path.dirname(filePath), 'node_modules', '.bin');
};

module.exports.sync = cwd => {
  const filePath = findUp.sync('package.json', {cwd});
  return filePath && path.join(path.dirname(filePath), 'node_modules', '.bin');
};
