import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  thumbnail: DS.attr(),
  onsaleDate: DS.attr(),
  focDate: DS.attr(),
  unlimitedDate: DS.attr(),
});
