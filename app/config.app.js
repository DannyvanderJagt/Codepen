'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  devModeCanBeEnabled: true,

  app: {
    path: 'file://' + _path2.default.join(__dirname, 'render-process/index.html'),
    backgroundColorForWindow: '#212121'
  },

  crashReporter: {
    url: 'http://localhost:3000'
  }
};