'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-numeral',

  included: function(app) {
    this.app = app;

    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }

    this._super.included.apply(this, arguments);

    var appOptions = app.options || {};
    var options = appOptions.numeral || {};

    var numeralImport = app.env === 'production' ? 'vendor/numeral/min/numeral.min.js' : 'vendor/numeral/numeral.js';
    var localesImport = app.env === 'production' ? 'vendor/numeral/min/locales.min.js' : 'vendor/numeral/locales.js';

    app.import(numeralImport, {
      type: 'vendor',
      using: [{ transformation: 'amd', as: 'numeral' }]
    });

    if (typeof options.includeLocales === 'boolean' && options.includeLocales) {
      app.import(localesImport, {
        type: 'vendor',
        using: [{ transformation: 'amd', as: 'numeral-locales' }]
      });
    }
  },

  treeForVendor: function(vendorTree) {
    var numeralPath = path.dirname(require.resolve('numeral'));
    var numeralTree = new Funnel(numeralPath, {
      include: ['numeral.js', 'locales.js', 'min/**/*'],
      destDir: 'numeral'
    });

    return numeralTree;
  },
};
