import Route from '@ember/routing/route';
import numeral from 'numeral';
import 'numeral/uk-ua';
import 'numeral/fr';

export default Route.extend({
  model() {
    return {
      formatedNumber: numeral.locale('uk-ua') && numeral(1000).format('$0,0'),
      otherNumber: numeral.locale('fr') && numeral(1000).format('$0,0')
    };
  }
});
