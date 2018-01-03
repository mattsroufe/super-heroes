import DS from 'ember-data';
import ENV from '../config/environment';
import { isEmpty } from 'ember-utils';

export default DS.RESTAdapter.extend({
  host: 'https://gateway.marvel.com',
  namespace: 'v1/public',
  ajax: function(url, type, options) {
    if (isEmpty(options)) options = {};
    if (isEmpty(options.data)) options.data = {};
    options.data.apikey = ENV.MARVEL_API_KEY;
    return this._super(url, type, options);
  },
});
