import { module, test } from 'qunit';
import numeral from 'numeral';

module('Unit | Utility | numeral export');

test('numeral exports', (assert) => {
  assert.ok(numeral, 'numeral exports');
});
