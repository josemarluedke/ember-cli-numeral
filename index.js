'use strict';

module.exports = {
  name: 'ember-cli-numeral',

  options: {
    nodeAssets: {
      numeral: function() {
        var numeralImport = 'numeral.js';

        if (this.hasShimAMDSupport) {
          numeralImport = {
            path: 'numeral.js',
            using: [{ transformation: 'amd', as: 'numeral' }]
          };
        }

        var filesToImport = [numeralImport];

        if (this.includeLanguages) {
          filesToImport.push('locales.js');
        }

        return { import: filesToImport };
      }
    }
  },

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    this.hasShimAMDSupport = ('amdModuleNames' in target);
    target.options = target.options || { };
    target.options.numeral = target.options.numeral || { includeLanguages: false };
    this.includeLanguages = target.options.numeral.includeLanguages;

    this._super.included.call(this, target);

    if (!this.hasShimAMDSupport) {
      target.import('vendor/shims/numeral-amd.js', {
        exports: {
          type: 'vendor',
          numeral: [
            'default'
          ]
        }
      });
    }
  }
};
