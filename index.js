'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-numeral',
  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },
  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/numeral/numeral.js');
    this.app.import('/shims/amd.js');
  }
};