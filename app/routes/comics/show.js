import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
  activate: function() {
    Ember.$('body').addClass('dark');
  },
  deactivate: function() {
    Ember.$('body').removeClass('dark');
  }
});
