'use strict';
const pkgConf = require('pkg-conf');
const co = require('co');
const fs = require('fs-promise');
const astify = require('astify');


function * runscriptsInit() {
  const object = yield pkgConf('scripts');
  astify.install(global);
  const code = `export default ${object.toAST().toSource()};`;
  return fs.writeFile('./.scripts.js', code);
}

module.exports = co.wrap(runscriptsInit);
