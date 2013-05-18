Wildcard.MapRoute = Ember.Route.extend({
  model: function() {
    return Wildcard.Card.find();
  },
  setupController: function(controller, card) {
    this._super(controller, card);
    this.controllerFor('user').set('content', Wildcard.User.find('me'));
  },
  renderTemplate: function() {
    this.render();

    this.render('user', {outlet: 'user'});
  }
});
