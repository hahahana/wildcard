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
    this.render('sidebarPosts', {   // the template to render
      outlet: 'sidebarPosts',       // the name of the outlet in that template
      controller: 'map'  // the controller to use for the template
    });
  }
});
