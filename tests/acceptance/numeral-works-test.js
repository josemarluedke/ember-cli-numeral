import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | numeral works');

test('visiting /numeral-works', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.formated-number').text().trim(), '$1,000');
  });
});
