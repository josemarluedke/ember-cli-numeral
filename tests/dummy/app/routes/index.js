import Ember from 'ember';
import numeral from 'numeral';

export default Ember.Route.extend({
  model() {
    return {
      formatedNumber: numeral(1000).format('$0,0')
    };
  }
});
