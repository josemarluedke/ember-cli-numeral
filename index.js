/* eslint-env node */
'use strict';

let path = require('path');
let Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-numeral',

  included: function(app) {
    this.app = app;

    if (typeof app.import !== 'function' && app.app) {
      this.app = app = app.app;
    }

    this._super.included.apply(this, arguments);

    let appOptions = app.options || {};
    let options = appOptions.numeral || {};

    app.import({
      development: 'vendor/numeral/numeral.js',
      production: 'vendor/numeral/min/numeral.min.js'
    }, {
      using: [{ transformation: 'amd', as: 'numeral' }]
    });

    if (options.includeLanguages) {
      throw new Error('includeLanguages option is no longer available. Please use includeLocales (see the README for usage).');
    }

    if (options.includeLocales) {
      for (let locale of options.includeLocales) {
        app.import({
          development: `vendor/numeral/locales/${locale}.js`,
          production: `vendor/numeral/min/locales/${locale}.min.js`
        }, {
          using: [{ transformation: 'amd', as: `numeral/${locale}` }]
        });
      }
    }
  },

  treeForVendor: function(/* vendorTree */) {
    let numeralPath = path.dirname(require.resolve('numeral'));
    let numeralTree = new Funnel(numeralPath, {
      include: ['numeral.js', 'locales/**/*', 'min/**/*'],
      destDir: 'numeral'
    });

    return numeralTree;
  },
};
