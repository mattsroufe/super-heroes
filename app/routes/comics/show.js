import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  activate: function() {
    $('body').addClass('dark');
  },
  deactivate: function() {
    $('body').removeClass('dark');
  }
});
