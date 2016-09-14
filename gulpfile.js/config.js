'use strict';

var pkg  = require('../package.json');

module.exports = {
  name  : pkg.name,
  dirs  : {
    src   : 'src',
    dest  : 'public',
    build : 'build'
  }
};
