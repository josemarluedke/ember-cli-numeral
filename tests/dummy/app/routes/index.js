import Ember from 'ember';
import numeral from 'numeral';
import locales from 'numeral-locales'; // jshint ignore:line

export default Ember.Route.extend({
  model() {
    numeral.locale('uk-ua');

    return {
      formatedNumber: numeral(1000).format('$0,0')
    };
  }
});
