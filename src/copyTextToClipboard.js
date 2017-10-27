const ncp = require('copy-paste');
const Promise = require('bluebird');

module.exports = text => {
  return new Promise(resolve => {
    ncp.copy(text, resolve);
  });
};
