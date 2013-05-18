Wildcard.ButtonsRoute = Ember.Route.extend({
  model: function() {
    var buttons = [
      Em.Object.create({url: 'images/douchebag.jpg', name: "A*hole"}),
      Em.Object.create({url: 'images/test.jpg', name: "Pothole"})
    ];
    // var ap = Ember.ArrayProxy.create({ content: Ember.A(buttons) });
    return Ember.A(buttons);
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
