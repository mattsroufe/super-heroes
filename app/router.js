import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('comics', function() {
    this.route('show', {path: ':comic_id'});
  });
  this.route('characters', function () {
    this.route('show', {path: ':character_id'});
  });
  this.route('creators');
  this.route('events');
});

export default Router;
