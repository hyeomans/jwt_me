const path = require('path');
const fs = require('fs');
const sinon = require('sinon');
const chai = require('chai');

chai.use(require('chai-as-promised'));

global.path = path;
global.sinon = sinon;
global.expect = chai.expect;
