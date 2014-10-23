ember-cli-numeral
=================

ember-cli addon support for Numeral.js


# Install

```bash
npm install --save-dev ember-cli-numeral;
bower install --save numeral;
```

# Usage

```javascript
import numeral from 'numeral';

var string = numeral(1000).format('0,0');
// '1,000'
```

See the [Numeral.js docs](http://numeraljs.com/) for general usage.