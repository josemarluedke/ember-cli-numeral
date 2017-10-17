import Route from '@ember/routing/route';
import numeral from 'numeral';
import 'numeral-locales';

export default Route.extend({
  model() {
    numeral.locale('uk-ua');

    return {
      formatedNumber: numeral(1000).format('$0,0')
    };
  }
});
