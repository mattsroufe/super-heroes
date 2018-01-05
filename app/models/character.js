import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  thumbnail: DS.attr(),
  description: DS.attr(),
});
