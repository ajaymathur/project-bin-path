'use strict';
const path = require('path');
const pkgDir = require('pkg-dir');

module.exports = cwd => pkgDir(cwd).then(project => project ? path.resolve(project, 'node_modules', '.bin') : null);

module.exports.sync = cwd => {
  const project = pkgDir.sync(cwd);
  return project ? path.resolve(project, 'node_modules', '.bin') : null;
};
