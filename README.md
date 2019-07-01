## WARNING! 

You don't need this addon anymore when using [ember-auto-import](https://github.com/ef4/ember-auto-import). You can import [numeral.js](https://github.com/adamwdraper/Numeral-js) directly from NPM. The only difference in imports will be on locates. Instead of importing `import 'numeral/pl';` you would import `import 'numeral/locales/pl';`.

# ember-cli-numeral
[![Build Status](https://travis-ci.org/josemarluedke/ember-cli-numeral.svg?branch=master)](https://travis-ci.org/josemarluedke/ember-cli-numeral)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-numeral.svg)](https://emberobserver.com/addons/ember-cli-numeral)
[![NPM Version](https://img.shields.io/npm/v/ember-cli-numeral.svg?style=flat-square)](https://www.npmjs.com/package/ember-cli-numeral)

ES6 accessible module for Numeral.js within your Ember applications.

## Install

```bash
ember install ember-cli-numeral
```

## Usage

```javascript
import numeral from 'numeral';

let string = numeral(1000).format('0,0');
// '1,000'
```

See the [Numeral.js docs](http://numeraljs.com/) for general usage.

## Including Numeral.js locales

To include all the Numeral.js locales definitions, you need to add the
following configuration to your `ember-cli-build.js`.

```javascript
let app = new EmberApp(defaults, {
  numeral: {
    includeLocales: ['en-gb', 'pl']
  }
});
```

Then import locales to register them, and activate them:

```javascript
import numeral from 'numeral';
import 'numeral/en-gb';
import 'numeral/pl';

let string = numeral.locale('pl') && numeral(1000).format('0,0 $');

numeral.locale('en-gb');
let string2 = numeral(50).format('0.0[0]');

numeral.locale('en');
```

Note: the "en" locale is loaded by default.

## FastBoot compatibility

This addon is compatible with [FastBoot](http://ember-fastboot.com/) out of the box.

## License

`ember-cli-numeral` shims is MIT Licensed.
