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

        return {
          import: [ numeralImport, 'languages.js' ]
        };
      }
    }
  },

  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    this.hasShimAMDSupport = ('amdModuleNames' in target);
    this._super.included.apply(this, arguments);

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
