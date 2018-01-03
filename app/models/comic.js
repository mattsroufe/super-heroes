import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  thumbnail: DS.attr(),
  dates: DS.attr(),
  publishedAt: Ember.computed('dates', function() {
    return this.get('dates')[0].date;
  }),
  addedAt: Ember.computed('dates', function() {
    return this.get('dates')[0].date;
  }),
});
